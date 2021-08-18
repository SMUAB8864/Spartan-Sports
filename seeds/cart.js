const { Cart } = require('../models');
const CartData = [
  {
    user_id: 1,
    product_id:1,
  },
];
const seedCart = () => Product.bulkCreate(CartData);
module.exports = seedCart;

