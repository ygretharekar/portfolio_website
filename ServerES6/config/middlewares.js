import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import fallback from "express-history-api-fallback";
import path from "path";

export default app => {
	app.use(express.static(path.join(__dirname, "../../build")));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(
		session(
			{
				cookie: { path: "/", httpOnly: true, maxAge: 36000000 },
				secret: process.env.SESSION_SECRET,
				resave: true,
				saveUninitialized: true
			}
		)
	);

	app.use(fallback(path.join(__dirname + "../../build")));
};