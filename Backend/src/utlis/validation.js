const validator = require('validator');

const emailValidation = (emailId) => {
    const isEmailIdValid = validator.isEmail(emailId)
    return isEmailIdValid
}

const mobileNumberValidation = (mobileNumber) => {
    const isMobileNumnerValid = validator.isMobilePhone(mobileNumber, "any")
    return isMobileNumnerValid
}

const generatingUserData = (emailId, mobileNumber) => {
    const userData = {}

    if (mobileNumber) {
        if (!mobileNumberValidation(mobileNumber)) {
            throw new Error('Enter a valid mobile number')
        }
        userData.mobileNumber = mobileNumber
    } else {
        if (!emailValidation(emailId)) {
            throw new Error('Enter a valid emailId')
        }
        userData.emailId = emailId
    }
    return userData
}

module.exports = { emailValidation, mobileNumberValidation, generatingUserData }