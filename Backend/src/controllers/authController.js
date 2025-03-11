const userModel = require("../models/userModel");
const otpModel = require("../models/otpModel");
const { generateOtp, verifyOtp } = require("../utlis/otpService");

// sign-up request handler
exports.signUpOtp = async (req, res) => {
    try {
        const { mobileNumber } = req.body;
        if (!mobileNumber) {
            return res.status(400).json({ message: "Phone number cannot be empty" });
        }
        await generateOtp(mobileNumber);
        res.json({ message: "Otp sent successfully" });
    } catch (err) {
        res.status(400).json({ message: "ERROR :" + err.message });
    }
};

exports.signupOtpVerify = async (req, res) => {
    try {
        const { mobileNumber } = req.body;
        const otp_id = await verifyOtp(req);
        const user = new userModel({ mobileNumber });
        await user.save();
        const token = await user.generateToken();
        await otpModel.findByIdAndDelete(otp_id);
        res
            .cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) })
            .json({ message: "OTP verified successfully" });
    } catch (err) {
        res.status(400).json({ message: "Error :" + err.message });
    }
};

// sign-in request handler
exports.logInOtp = async (req, res) => {
    try {
        const { mobileNumber } = req.body;
        if (!mobileNumber) {
            return res.status(400).json({ message: "mobile number cannot be empty" });
        }
        await generateOtp(mobileNumber);
        res.json({ message: "OTP sent successfully" });
    } catch (err) {
        res.status(400).json({ message: "ERROR :" + err.message });
    }
};

exports.logInOtpVerify = async (req, res) => {
    try {
        const { mobileNumber } = req.body;
        const otp_id = await verifyOtp(req);
        const user = await userModel.findOne({ mobileNumber });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const token = await user.generateToken();
        await otpModel.findByIdAndDelete(otp_id);
        res
            .cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) })
            .json({ message: "OTP verified successfully" });
    } catch (err) {
        res.status(400).json({ message: "ERROR :" + err.message });
    }
};

// log-out request handler
exports.logOut = (req, res) => {
    res
        .cookie("token", null, { expires: new Date(Date.now()) })
        .json({ message: "logout successfull" });
};
