const express = require('express');
const router = express.Router();

// import controllers
const UserController = require('../app/controllers/user.controller');
const userCtrl = new UserController();

router.route('/login')
.post(userCtrl.userLogin)

module.exports = router;