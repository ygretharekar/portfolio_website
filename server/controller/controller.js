"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.saveFeedback = undefined;

var _feedback = require("../models/feedback");

var _feedback2 = _interopRequireDefault(_feedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveFeedback = exports.saveFeedback = function saveFeedback(req, res) {
	var _req$body = req.body,
	    name = _req$body.name,
	    email = _req$body.email,
	    feedback = _req$body.feedback,
	    hire = _req$body.hire;


	var feed = new _feedback2.default({ name: name, email: email, feedback: feedback, hire: hire });

	feed.save(function (err) {
		if (err) {
			console.error("Error: ", err);
			res.status(500).json({ error: "feedback couldn't be saved" });
		}
	});

	res.status(200).json({ name: name, email: email, feedback: feedback, hire: hire });
};