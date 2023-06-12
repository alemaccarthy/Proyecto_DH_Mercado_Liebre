const express = require('express');
const productRouter = express.Router();
const path = require('path');
const productController = require('../controllers/productController');

// @ GET /products
productRouter.get('/', productController.getProducts);

// @GET /products/:id/detail
productRouter.get('/:id/detail', productController.getProductDetail);

// @GET /products/:id/update
productRouter.get('/:id/update', productController.getUpdate);

// @GET /products/create
productRouter.get('/create', productController.getCreate);

module.exports = productRouter;