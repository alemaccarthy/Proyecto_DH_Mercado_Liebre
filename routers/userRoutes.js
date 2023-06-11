const express = require('express');
const userRouter = express.Router();
const path = require('path');
const userController = require('../controllers/userController')

userRouter.get('/register', userController.getRegister);

userRouter.get('/login', userController.getLogin)

module.exports = userRouter;