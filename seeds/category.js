const { Category } = require('../models');
const categoryData = [{
        category_name: 'Top',
    },
    {
        category_name: 'Bottom',
    },
    {
        category_name: 'Shoes',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;