const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            minLength: 4,
            maxLength: 10,
            trim: true,
        },
        lastName: {
            type: String,
            minLength: 4,
            maxLength: 10,
            trim: true,
        },
        emailId: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Enter a valid email");
                }
            },
        },
        BirthDayDate: {
            type: String,
        },
        gender: {
            type: String,
            validate(value) {
                if (!["Male", "Female", "Other"].includes(value)) {
                    throw new Error("gender type is not valid");
                }
            },
        },

        interstedIn: {
            type: String,
            enum: {
                values: ["Men", "Woman", "Everyone"],
                message: "{VALUE} is not a valid type ",
            },
        },
        lookingFor: {
            type: [String],
        },
        interests: {
            type: [String],
        },
        mobileNumber: {
            type: String,
            validate(value) {
                if (!validator.isMobilePhone(value, "any")) {
                    throw new Error("Enter a valid mobile number");
                }
            },
        },
        photoURL: {
            type: String,
            validate(value) {
                if (!validator.isURL(value)) {
                    throw new Error("Enter a valid image path");
                }
            },
        },
    },
    {
        timestamps: true,
    }
);

//Instance methods
userSchema.methods.generateToken = async function () {
    const token = await jwt.sign(
        { _id: this._id },
        `${process.env.JWT_SECRETE}`,
        { expiresIn: "7d" }
    );
    return token;
};



// userSchema.methods.bcryptValidPassword = async function (password) {
//     const validPassword = await bcrypt.compare(password, this.passWord)
//     return validPassword
// }

const User = mongoose.model("User", userSchema);
module.exports = User;
