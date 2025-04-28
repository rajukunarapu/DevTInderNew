const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const requestRoutes = require('./routes/requestRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();  // Instance of express
const allowedOringins= [`${process.env.CLIENT_URL}`]

app.use(cors({
    origin : function(origin,callback){
        if( !origin || allowedOringins.includes(origin)){
            return callback(null, true)
        } else{
            return callback(null,false)
        }
    },
    credentials : true
}))
app.use(express.json()) // middleware for converting JSON objects to JS objects
app.use(cookieParser())  // reading the cookies otherwise it'll throw undefined

app.use('/auth', authRoutes)  // authentication
app.use('/profile', profileRoutes)  // profile view, updations
app.use('/request', requestRoutes) // request sending
app.use('/user', userRoutes)

module.exports = app;