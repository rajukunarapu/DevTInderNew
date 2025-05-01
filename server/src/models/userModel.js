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
        password :{
            type : String,
            trim: true,
            validate :{
                validator : (value)=>validator.isStrongPassword(value),
                message: "{VALUE} is not a strong password"
            },
        },
        BirthDayDate: {
            type: String,
        },
        gender: {
            type: String,
            enum :{
                values : ["Men", "Woman", "Other"],
                message : "{VALUE} is not a valid gender type"
            }
        },

        interestedIn: {
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
        // mobileNumber: {
        //     type: String,
        //     validate(value) {
        //         if (!validator.isMobilePhone(value, "any")) {
        //             throw new Error("Enter a valid mobile number");
        //         }
        //     },
        // },
        photoURL: {
            type: [],
            // validate(value) {
            //     if (!validator.isURL(value)) {
            //         throw new Error("Enter a valid image path");
            //     }
            // },
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
        `${process.env.JWT_SECRETE_KEY}`,
        { expiresIn: "7d" }
    );
    return token;
};


userSchema.methods.bcryptValidPassword = async function (password) {
    const isValidPassword = await bcrypt.compare(password, this.password)
    return isValidPassword
}

const User = mongoose.model("User", userSchema);
module.exports = User;
