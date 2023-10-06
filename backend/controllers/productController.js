const { Product } = require('../database/models');
const { Op, Sequelize } = require('sequelize');

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
    },
    createProduct: async (req, res) => {
        const product = {title, description} = req.body;
        const price = Number(req.body.price);

        try{
            const newProduct = await Product.create({
                title,
                price,
                description,
            });
        }catch(error){
            console.log(error);
        }

        res.redirect('/products')
    },

    updateProduct: async (req, res) => {
        const product_id = req.params.id;
        const newData = {title, description} = req.body;
        const newPrice = Number(req.body.price);

        try {
            await Product.update(newData, {
                where: {
                    id: product_id
                }
            });
        }catch(error){
            console.log(error);
        };
    },

    deleteProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const product = await Product.findByPk(id, {
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplico soft Delete
                    },
                }
            });
            
            await product.destroy({
                where: {
                    id: id
                }
            });
            res.redirect('/products');
            return;
        }catch(error){
            console.log(error);
        }}
};

module.exports = productController;