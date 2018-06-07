import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CountSchema = new Schema({
	type:{
		type: String,
		default: "hitcount"
	},
	name: Number,
	addedOn: {
		type: Date,
		default: Date.now(),
	}
});

const Count = mongoose.model("count", CountSchema);

export default Count;