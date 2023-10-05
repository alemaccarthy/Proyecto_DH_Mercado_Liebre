module.exports = (sequelize, dataType) =>{
    const alias = 'Product';
    const cols = {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataType.STRING,
            allowNull: false
        },
        price:{
            type: dataType.INTEGER,
            allowNull: false
        },
        description:{
            type: dataType.TEXT,
            allowNull: false
        },
        createdAt: {
            type: dataType.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },

        updatedAt: {
            type: dataType.DATE,
            allowNull: true,
        },

        deletedAt: {
            type: dataType.DATE,
            allowNull: true,
        }

    }
    const config = {
        tableName: 'products',
        paranoid: true
    }
    
    const Product = sequelize.define(alias, cols, config);

    return Product;
}