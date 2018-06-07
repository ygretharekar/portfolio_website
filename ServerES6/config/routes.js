import {saveFeedback} from "../controller/controller";

export default (app) => {
	app.post("/feedback", saveFeedback);

};