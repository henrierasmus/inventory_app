const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Catagory = require('../../models/Catagory');

// @route   GET api/catagory
// @desc    Display list of the catagories
// @access  Public
router.get('/', async (req, res) => {
	try {
		const catagories = await Catagory.find().sort([
			['instrument', 'ascending']
		]);
		res.json(catagories);
	} catch (err) {
		console.error(err.message);
	}
});

// @route   POST api/catagory
// @desc    Create a new catagory
// @access  Public

router.post(
	'/',
	[
		check('instrument', 'Instrument is required')
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
			const newCatagory = new Catagory({
				instrument: req.body.instrument,
				sub_catagory: req.body.sub_catagory
			});

			const catagory = await newCatagory.save();
			res.json(catagory);
			console.log('Catagory created');
		} catch (err) {
			console.error(err.message);
			res.status(500).send('server Error');
		}
	}
);

// @route   DELETE api/catagory
// @desc    Delete a catagory
// @access  Public

router.delete('/:catagory_id', async (req, res) => {
	try {
		const catagory = await Catagory.findById(req.params.catagory_id);

		if (!catagory) {
			return res.status(404).json({ msg: 'Catagory not found' });
		}

		await catagory.deleteOne();
		res.json({ msg: 'Catagory Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server Error');
	}
});

module.exports = router;
