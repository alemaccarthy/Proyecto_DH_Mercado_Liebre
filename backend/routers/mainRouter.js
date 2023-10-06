const express = require('express');
const mainRouter = express.Router();
const path = require('path'); 
const mainController = require('../controllers/mainController');

mainRouter.get('/', mainController.getIndex);

module.exports = mainRouter;