const initialState = {
	STEP: 0
};

export default (state = initialState, action) => {
	switch (action.type) {

	case "CHANGE_STEP":
		return { 
			...state,
			...action.payload 
		};



	default:
		return state;
	}
};
