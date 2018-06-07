"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _controller = require("../controller/controller");

exports.default = function (app) {
	app.post("/feedback", _controller.saveFeedback);
};