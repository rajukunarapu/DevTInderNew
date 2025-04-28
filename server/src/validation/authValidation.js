const validator = require('validator');

const emailValidation = (value) => {
    const isEmailIdValid = validator.isEmail(value)
    if(!isEmailIdValid){
        throw new Error("Enter valid emailId")
    }
}

const passwordValidation = (value)=>{
    const isPasswordValid = validator.isStrongPassword(value)
    if(!isPasswordValid){
        throw new Error("Enter a strong password")
    }
}

module.exports = { emailValidation, passwordValidation }