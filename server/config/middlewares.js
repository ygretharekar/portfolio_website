"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _expressHistoryApiFallback = require("express-history-api-fallback");

var _expressHistoryApiFallback2 = _interopRequireDefault(_expressHistoryApiFallback);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

exports.default = function (app) {

	app.use(_express2.default.static(_path2.default.join(__dirname, "../../build")));
	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({ extended: true }));

	_mongoose2.default.connect(process.env.MONGODB_URI);

	_mongoose2.default.connection.once("open", function () {
		console.log("====================================");
		console.log("database connection established");
		console.log("====================================");
	}).on("error", function (err) {
		console.error(err);
	});

	app.use((0, _expressSession2.default)({
		cookie: { path: "/", httpOnly: true, maxAge: 36000000 },
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true
	}));

	app.use((0, _expressHistoryApiFallback2.default)(_path2.default.join(__dirname + "../../build")));

	(0, _routes2.default)(app);
};