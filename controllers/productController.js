const productController = {
    getProducts(req, res){
        res.render('products', {title: '| Productos'});
    },
    getProductDetail(req, res){
        res.render('product-detail', {title: '| Detail'})
    }
}

module.exports = productController;