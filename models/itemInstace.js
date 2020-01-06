// Not sure if this is needed

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemInstanceSchema = new Schema({
	item: { type: Schema.Types.ObjectId, ref: Item, required: true },
	status: { type: String, required: true }
});
