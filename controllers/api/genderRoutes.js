const router = require('express').Router();
const { Gender, Product } = require('../../models');

// The `/api/gender` endpoint

router.get('/', async (req, res) => {
    // find all gender
    // be sure to include its associated Products
    try {
        const genderData = await Gender.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(genderData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one gender by its `id` value
    // be sure to include its associated Products
    try {
        const genderData = await Gender.findByPk(req.params.id, {
            // JOIN with travellers, using the Trip through table
            include: [{ model: Product }],
        });
  
        if (!genderData) {
            res.status(404).json({ message: 'Cannot find this id!' });
            return;
        }
  
        res.status(200).json(genderData);
        } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new gender
    try {
        const genderData = await Gender.create(req.body);
        res.status(200).json(genderData);
    }   catch (err) {
        res.status(400).json(err);
    }
});
  
router.put('/:id', (req, res) => {
    // update a gender by its `id` value
    Gender.update(
        {
            gender_name: req.body.gender_name,
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
    // delete a gender by its `id` value
    try {
        const genderData = await Gender.destroy({
            where: {
                id: req.params.id,
            },
        });
  
        if (!genderData) {
            res.status(404).json({ message: 'Cannot find this id!' });
            return;
        }
  
        res.status(200).json(genderData);
    }   catch (err) {
        res.status(500).json(err);
    }
});
  
module.exports = router;