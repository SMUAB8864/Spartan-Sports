const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Cart extends Model {}
cart.init({
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
  }
  },
  product_id:{
      type: DataTypes.INTEGER,
      references: {
          model: 'product',
          key: 'id'
      }
  }, 
},{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'cart',
});
module.exports = Cart;
