const express = require('express');
const router = express.Router();
// import middlewares
const loginCheck = require('../app/middlewares/login.middlware');

// import controllers
const UserController = require('../app/controllers/user.controller');
const userCtrl = new UserController();

const uploader = require('./../app/middlewares/uploader.middleware');
router.route('/')
.get(loginCheck, userCtrl.listAllUsers)
.post(loginCheck, uploader.single('image'), userCtrl.userRegister)

router.route('/:id')
.get(userCtrl.getUserById)
.put(loginCheck, userCtrl.updateUserById)
.delete(loginCheck, userCtrl.deleteUserById)


router.route('/search')
.get()

module.exports = router;