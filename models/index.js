const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Gender = require('./Gender');
const Cart = require('./Cart');

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Gender, {
  foreignKey: 'gender_id',
});

Gender.hasMany(Product, {
  foreignKey: 'gender_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Cart, {
  foreignKey: 'product_id',
});

Cart.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Project };
