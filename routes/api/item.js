const express = require('express');
const router = express.Router();

// @route   GET api/catagory
// @desc    Display all items in db
// @access  Public
router.get('/', (req, res) => res.send('Items route'));

module.exports = router;