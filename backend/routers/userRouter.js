const express = require('express');
const userRouter = express.Router();
const path = require('path');
const userController = require('../controllers/userController')
const multer = require('multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './public/images/users-images');
    },
    filename: function (req, file, cb) {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });

// @GET /user/register
userRouter.get('/register', userController.getRegister);

// @POST /user/register
userRouter.post('/register', [upload.single('profile_picture')], userController.register);

// @GET /user/login
userRouter.get('/login', userController.getLogin)

module.exports = userRouter;