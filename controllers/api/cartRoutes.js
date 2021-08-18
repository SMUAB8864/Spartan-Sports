const router = require('express').Router();
const { Cart, Product } = require('../../models');

// The `/api/cart` endpoint

router.get('/', async (req, res) => {
    // find all cart
    // be sure to include its associated Products
    try {
        const cartData = await Cart.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(cartData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one cart by its `id` value
    // be sure to include its associated Products
    try {
        const cartData = await Cart.findByPk(req.params.id, {
            // JOIN with travellers, using the Trip through table
            include: [{ model: Product }],
        });
  
        if (!cartData) {
            res.status(404).json({ message: 'Cannot find this id!' });
            return;
        }
  
        res.status(200).json(cartData);
        } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new cart
    try {
        const cartData = await Cart.create(req.body);
        res.status(200).json(cartData);
    }   catch (err) {
        res.status(400).json(err);
    }
});
  
router.put('/:id', (req, res) => {
    // update a cart by its `id` value
    Cart.update(
        {
            cart_name: req.body.category_name,
        },
        {
            where: {
                id: req.body.id,
            },
        }
    )
        .then(() => {
            // Sends the updated book as a json response
            res.json(req.body);
        })
        .catch((err) => res.json(err));
});
  
router.delete('/:id', async (req, res) => {
    // delete a cart by its `id` value
    try {
        const cartData = await Cart.destroy({
            where: {
                id: req.params.id,
            },
        });
  
        if (!cartData) {
            res.status(404).json({ message: 'Cannot find this id!' });
            return;
        }
  
        res.status(200).json(cartData);
    }   catch (err) {
        res.status(500).json(err);
    }
});
  
module.exports = router;