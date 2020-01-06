const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	catagory: [{ type: Schema.Types.ObjectId, ref: 'Catagory', required: true }],
	sub_catagory: { type: String },
	brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
	model: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	picture: { type: String },
	amount: { type: Number }
});

module.exports = mongoose.model('Item', ItemSchema);
