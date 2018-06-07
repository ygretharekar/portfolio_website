"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var FeedbackSchema = new Schema({
	name: String,
	email: String,
	feedback: String,
	hire: {
		type: Boolean,
		default: false
	},
	addedOn: {
		type: Date,
		default: Date.now()
	}
});

var Feedback = _mongoose2.default.model("feedback", FeedbackSchema);

exports.default = Feedback;