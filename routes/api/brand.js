// Will Likely only need a form for this route to add a new brand

const express = require('express');
const router = express.Router();

// @route   GET api/catagory
// @desc    test route
// @access  Public
router.get('/', (req, res) => res.send('Brands Route'));

module.exports = router;
