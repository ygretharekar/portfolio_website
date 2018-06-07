import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import steps from "../reducers/stepsReducer";
import feedback from "../reducers/feedbackReducer";

export default combineReducers(
	{
		steps,
		feedback,
		form: formReducer
	}
);
