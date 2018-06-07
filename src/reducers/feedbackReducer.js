const initialState = {
	name:"",
	email:"",
	feeback:"",
	hire:false,
	error: ""
};

export default (state = initialState, action) => {
	switch (action.type) {

	case "FEEDBACK_SENT":
		return { 
			...state,
			...action.payload
		};

	default:
		return state;
	}
};
