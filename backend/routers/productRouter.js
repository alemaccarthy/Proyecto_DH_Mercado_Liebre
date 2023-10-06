const express = require('express');
const productRouter = express.Router();
const path = require('path');
const productController = require('../controllers/productController');
const multer = require('multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './public/images/products-images');
    },
    filename: function (req, file, cb) {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });


// @ GET /products
productRouter.get('/', productController.getProducts);

// @GET /products/:id/detail
productRouter.get('/:id/detail', productController.getProductDetail);

// @GET /products/:id/update
productRouter.get('/:id/update', productController.getUpdate);

// @GET /products/create
productRouter.get('/create', productController.getCreate);

// @POST /products/create
productRouter.post('/create', [upload.any('images')], productController.createProduct);

module.exports = productRouter;