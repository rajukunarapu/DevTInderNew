const validator = require('validator');

// const emailValidation = (emailId) => {
//     const isEmailIdValid = validator.isEmail(emailId)
//     return isEmailIdValid
// }

const mobileNumberValidation = (mobileNumber) => {
    const isMobileNumberValid = validator.isMobilePhone(mobileNumber, "any")
    if (!isMobileNumberValid) {
        return res.status(400).json({ message: 'Enter a valid mobile Numeber' })
    }
    return isMobileNumberValid
}

// const generatingUserData = (emailId, mobileNumber) => {
//     const userData = {}

//     if (mobileNumber) {
//         if (!mobileNumberValidation(mobileNumber)) {
//             throw new Error('Enter a valid mobile number')
//         }
//         userData.mobileNumber = mobileNumber
//     } else {
//         if (!emailValidation(emailId)) {
//             throw new Error('Enter a valid emailId')
//         }
//         userData.emailId = emailId
//     }
//     return userData
// }

module.exports = { mobileNumberValidation }