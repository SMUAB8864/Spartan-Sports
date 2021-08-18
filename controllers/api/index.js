const router = require('express').Router();
const cartRoutes = require('./cartRoutes');
const categoryRoutes = require('./categoryRoutes');
const genderRoutes = require('./genderRoutes');
const productRoutes = require('./productRoutes');

router.use('/carts', cartRoutes);
router.use('/categories', categoryRoutes);
router.use('/genders', genderRoutes);
router.use('/products', productRoutes);

module.exports = router;
