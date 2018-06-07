import axios from "axios";

export const CHANGE_STEP = "CHANGE_STEP";

export const change_step = payload => ({
	type: CHANGE_STEP,
	payload
});

export const FEEDBACK_SENT = "FEEDBACK_SENT";

export const feedbackSent = payload => ({
	type: FEEDBACK_SENT,
	payload
});

export const sendFeedback = 
	(feedback) =>
		dispatch => {
			axios
				.post(
					"/feedback",
					{
						...feedback
					}
				)
				.then(
					res => {
						console.log("====================================");
						console.log(res);
						console.log("====================================");
						dispatch(feedbackSent({ ...res.data }));
					}
				)
				.catch(
					err => console.error(err)
				);
		};