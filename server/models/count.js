"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CountSchema = new Schema({
	type: {
		type: String,
		default: "hitcount"
	},
	name: Number,
	addedOn: {
		type: Date,
		default: Date.now()
	}
});

var Count = _mongoose2.default.model("count", CountSchema);

exports.default = Count;