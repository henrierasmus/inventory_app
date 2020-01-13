const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
const { check, validationResult } = require('express-validator');

// @route   GET api/catagory
// @desc    Display all items in db
// @access  Public
router.get('/', async (req, res) => {
	try {
		const items = await Item.find();
		res.json(catagories);
	} catch (err) {
		console.error(err.message);
	}
});

// @route   POST api/item
// @desc    Create a new item
// @access  Public

router.post(
	'/',
	[
		check('catagory', 'Instrument is required')
			.not()
			.isEmpty(),
		check('brand', 'Brand is required')
			.not()
			.isEmpty(),
		check('model', 'The instruments model is required')
			.not()
			.isEmpty(),
		check('price', 'The price is required')
			.not()
			.isEmpty(),
		check('description', 'The items description is required')
			.not()
			.isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log('something went wrong', errors);
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const newItem = new Item({
				catagory: req.body.catagory,
				brand: req.body.brand,
				model: req.body.model,
				price: req.body.price,
				description: req.body.price,
				// need a function that will count the amount of same items
				sub_catagory: req.body.sub_catagory
				// need to add picture and amount
			});

			const item = await newItem.save();
			res.json(item);
			console.log('Item created');
		} catch (err) {
			console.error(err.message);
			res.status(500).send('server Error');
		}
	}
);

// @route   DELETE api/item
// @desc    Delete a item
// @access  Public

router.delete('/:item_id', async (req, res) => {
	try {
		const item = await Item.findById(req.params.item_id);

		if (!item) {
			return res.status(404).json({ msg: 'Catagory not found' });
		}

		await item.deleteOne();
		res.json({ msg: 'Item Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server Error');
	}
});

module.exports = router;
