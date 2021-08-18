const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Product extends Model {}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    description: {
        type: DataTypes.STRING,
      },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        Validate: {
            isNumeric: true
        }
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    size: {
        type:DataTypes.STRING, 
        allowNull:false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    quentity:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isNumeric:true 
        }
    }, 
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Category',
            key: 'id'
        }
    },
    gender_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Gender',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});
module.exports = Product;