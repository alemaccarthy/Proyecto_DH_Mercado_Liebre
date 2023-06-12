const express = require('express');
const productRouter = express.Router();
const path = require('path');
const productController = require('../controllers/productController');

// @ GET /products
Router.get('/', productController.getProducts);

Router.get('/:id/detail', productController.getProductDetail);

module.exports = productRouter;