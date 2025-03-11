const express = require('express');
const { signUpOtp, signupOtpVerify, logInOtp, logInOtpVerify, logOut } = require('../controllers/authController')


const router = express.Router()

router.post('/signup', signUpOtp)
router.post('/signup/otp-verify', signupOtpVerify)
router.post('/login', logInOtp)
router.post('/login/otp-verify', logInOtpVerify)
router.get('/logout', logOut)


module.exports = router;