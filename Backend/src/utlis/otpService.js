const twilio = require("twilio");
const otpModel = require("../models/otpModel");
const { mobileNumberValidation } = require("../validation/authValidation");

const generateOtp = async function (mobileNumber) {
    try {
        const isMobileNumberValid = mobileNumberValidation(mobileNumber);
        if (!isMobileNumberValid) {
            return res
                .status(400)
                .json({ message: "It's not a valid mobile number" });
        }
        const twilioClient = twilio(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
        );
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const storeOTP = new otpModel({ mobileNumber, otp });
        await storeOTP.save();
        twilioClient.messages.create({
            body: `Your OTP is : ${otp}. It will expire in 5 minutes. `,
            from: process.env.TWILIO_MOBILE_NUMBER,
            to: `+91${mobileNumber}`,
        });
    } catch (error) {
        res.status(400).json({ message: "Error :" + error.message });
    }
};

const verifyOtp = async function (req) {
    try {
        const { mobileNumber, otp } = req.body;
        const isMobileNumberValid = mobileNumberValidation(mobileNumber);
        if (!isMobileNumberValid) {
            return res.status(400).json({ message: "Enter a valid mobile number" });
        }
        if (!otp) {
            return res.status(400).json({ message: "Enter a OTP" });
        }
        const otpDoc = await otpModel.findOne({ mobileNumber });
        if (!otpDoc.otp) {
            return res.status(404).json({ message: "OTP not found" });
        }
        if (otpDoc.otp !== otp) {
            return res.status(400).json({ message: "Incorrect OTP" });
        }
        return otpDoc._id
    } catch (err) {
        res.status(400).json({ message: "Error :" + err.message });
    }
};

module.exports = { generateOtp, verifyOtp };
