const express = require('express');
const { profileUpdateController, profileViewController, forgetPassword } = require('../controllers/profileController');
const { authMiddleware } = require('../middlewares/authMiddleware');


const router = express.Router();

router.get('/view', authMiddleware, profileViewController)
router.patch('/update', authMiddleware, profileUpdateController)
// router.patch('/forgetPassword', authMiddleware, forgetPassword)

module.exports = router;