const userModel = require("../models/userModel");
const { generatingUserData } = require('../utlis/validation')
const validator = require("validator");
const twilio = require('twilio')

// sign-up request handler
exports.signUp = async (req, res) => {
    try {
        const { emailId, mobileNumber } = req.body;

        // storing the data based on either email or mobilenumber login
        const userData = generatingUserData(emailId, mobileNumber)

        const user = new userModel(userData);
        await user.save();
        const token = await user.generateToken() //schema method

        const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        twilioClient.messages.create({
            body: `Your OTP is : ${otp}. It will expire in 5 minutes. `,
            from: process.env.TWILIO_MOBILE_NUMBER,
            to: mobileNumber
        })

        res
            .cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) })
            .json({ message: "signUp successfull" });
    } catch (err) {
        res.status(400).json({ message: "ERROR :" + err.message });
    }
};

// sign-in request handler
exports.logIn = async (req, res) => {
    try {
        const { emailId, mobileNumber } = req.body;

        // storing the data based on either email or mobilenumber login
        const userData = generatingUserData(emailId, mobileNumber)

        const user = await userModel.findOne(userData)
        const token = await user.generateToken()
        res
            .cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) })
            .json({ message: "Login successfull" });
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
