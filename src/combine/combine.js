import {combineReducers} from "redux";

import red from "../reducers/reducer";
import steps from "../reducers/stepsReducer";

export default combineReducers(
	{
		red,
		steps
	}
);
