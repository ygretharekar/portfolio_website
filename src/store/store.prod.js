import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../combine/combine";

export default initialState => createStore(
	reducers,
	initialState,
	compose(applyMiddleware(thunk))
);