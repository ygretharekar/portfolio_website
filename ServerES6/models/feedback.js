import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
	name: String,
	email: String,
	feedback: String,
	hire: {
		type: Boolean,
		default: false
	},
	addedOn: {
		type: Date,
		default: Date.now(),
	}
});

const Feedback = mongoose.model("feedback", FeedbackSchema);


export default Feedback;