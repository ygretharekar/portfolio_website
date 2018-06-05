import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import red from "../reducers/reducer";
import steps from "../reducers/stepsReducer";

export default combineReducers(
	{
		red,
		steps,
		form: formReducer
	}
);
