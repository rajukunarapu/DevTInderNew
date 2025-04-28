const express = require('express');
const { signUpController, logIncontroller, logOut, isAuthenticatedController } = require('../controllers/authController')


const router = express.Router()

router.post('/signup', signUpController)
router.post('/login', logIncontroller)
router.get('/isAuthenticated',isAuthenticatedController)
router.get('/logout', logOut)


module.exports = router;