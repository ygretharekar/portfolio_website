const initialState = {


};

export default (state = initialState, action) => {
	switch (action.type) {

	case "action":
		return { ...state };

	default:
		return state;
	}
};
