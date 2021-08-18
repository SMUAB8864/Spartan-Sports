const { Gender } = require('../models');
const GenderData = [
  {
    gender_name: "Men",
  },
  {
    gender_name: "Women",
  },
  {
    gender_name: "Kids",
  },
];
const seedGender = () => Product.bulkCreate(GenderData);
module.exports = seedUSER;

