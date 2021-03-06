import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from "../combine/combine";

console.log("DEV");

export default initialState => createStore(
	reducer,
	initialState,
	composeWithDevTools(
		applyMiddleware(
			thunk,
			reduxImmutableStateInvariant()
		)
	)
);