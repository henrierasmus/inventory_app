const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CatagorySchema = new Schema({
	instrument: { type: String, required: true },
	sub_catagory: { type: String }
});

module.exports = mongoose.model('Catagory', CatagorySchema);
