const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const {
  emailValidation,
  passwordValidation,
} = require("../validation/authValidation");

// sign-up route handler
exports.signUpController = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    emailValidation(emailId);
    passwordValidation(password);

    const hashedPassword = await bcrypt.hash(password, 10);
    const document = await userModel.create({
      emailId: emailId,
      password: hashedPassword,
    });
    const token = await document.generateToken();

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 60 * 60 * 1000,
      })
      .json({ success: true, message: "signup successfull" });
  } catch (err) {
    res.status(400).json({ success: false, message: "ERROR : " + err.message });
  }
};

// sign-in route handler
exports.logIncontroller = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    emailValidation(emailId);
    passwordValidation(password);

    const document = await userModel.findOne({ emailId });
    if (!document) {
      return res
        .status(400)
        .json({ success: false, message: "user not found!" });
    }
    if (!(await document.bcryptValidPassword(password))) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }

    const token = await document.generateToken();
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 60 * 60 * 1000,
      })
      .json({ success: true, message: "login successfull" });
  } catch (err) {
    res.status(400).json({ success: false, message: "ERROR : " + err.message });
  }
};

exports.isAuthenticatedController = (req, res) => {
  try {
    const {token} = req.cookies;
    if (!token) {
      return res
        .status(401)
        .json({
          success: false,
          message: "token not found!",
          isAuthenticated: false,
        });
    }
    jwt.verify(token, `${process.env.JWT_SECRETE_KEY}`);
    res.json({
      success: true,
      message: "token verified",
      isAuthenticated: true,
    });
  } catch (error) {
    res
      .status(401)
      .json({
        success: false,
        message: "Invalid token", 
        isAuthenticated: false,
      });
  }
};

// log-out route handler
exports.logOut = (req, res) => {
  res
    .cookie("token", null, { httpOnly:true, secure : false, sameSite : 'Lax', maxAge : 0 })
    .json({ success: true, message: "logout successfull" });
};
