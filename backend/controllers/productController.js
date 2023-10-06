const productController = {
    getProducts(req, res){
        res.render('products', {title: '| Productos'});
    },
    getProductDetail(req, res){
        res.render('product-detail', {title: '| Detalle'})
    },
    getCreate(req, res){
        res.render('create-product', {title: '| Creá tu producto'})
    },
    getUpdate(req, res){
        res.render('update-product', {title: '| Editá tu producto'})
    }
}

module.exports = productController;