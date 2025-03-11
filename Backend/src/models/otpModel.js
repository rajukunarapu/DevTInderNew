const mongoose = require('mongoose')
const validator = require('validator')

const otpSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isMobilePhone(value, "any")) {
                throw new Error("Enter a valid mobile Number")
            }
        }
    },
    otp: {
        type: String,
        unique: true
    }

})

module.exports = mongoose.model("otp", otpSchema)