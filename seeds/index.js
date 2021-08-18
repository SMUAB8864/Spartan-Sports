// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();

const seedCategories = require('./category');
const seedProducts = require('./product');
const seedUsers = require('./user');
const GenderProductTags = require('./gender');
const seedProductTags = require('./product-tag-seeds');
const sequelize = require('../config/connection');
const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedCategories();
    await seedProducts();
    await seedUsers();
    ();
    process.exit(0);
};
seedAll();