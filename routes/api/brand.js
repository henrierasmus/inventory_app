// Will Likely only need a form for this route to add a new brand

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Brand = require('../../models/Brand');

// @route   GET api/brand
// @desc    Display all brands
// @access  Public
router.get('/', async (req, res) => {
	try {
		const brands = await brands.find().sort(['name', 'ascending']);
		res.json(brands);
	} catch (err) {
		console.error(err.message);
	}
});

// @route   POST api/brand
// @desc    Create a new brand
// @access  Public

router.post(
	'/',
	[
		check('name', 'Brand Name is required')
			.not()
			.isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const newBrand = new Brand({
				name: req.body.name
			});

			const brand = await newBrand.save();
			res.json(brand);
		} catch (err) {
			console.log(err);
			res.status(500).send('server error');
		}
	}
);

// @route   DELETE api/catagory
// @desc    Delete a catagory
// @access  Public

router.delete('/:brand_id', async (req, res) => {
	try {
		const brand = await Brand.findById(req.params.brand_id);

		if (!brand) {
			return res.status(404).json({ msg: 'Catagory not found' });
		}

		await brand.deleteOne();
		res.json({ msg: 'Brand Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server Error');
	}
});

module.exports = router;
