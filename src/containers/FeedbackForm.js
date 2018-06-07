import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {message} from "antd";

import NameInp from "./nameInput";
import EmailInp from "./emailInput";
import FField from "./feedbackField";
import Hire from "./hireMe";

let FeedbackForm = props => {
	const { error, handleSubmit, submitFailed} = props;

	const submit = (values) => {
		if (!values.name) {
			throw new SubmissionError({
				name: "Please Enter Name",
				_error: "form not submitted!"
			});
		}
		else if (!values.email) {
			throw new SubmissionError({
				email: "please Enter email address",
				_error: "form not submitted!"
			});
		} 
		else if (!values.feedback) {
			throw new SubmissionError({
				feedback: "Please write feedback",
				_error: "form not submitted!"
			});
		}
		else if(props.feedback.error){
			throw new SubmissionError({
				hire: "Server Error",
				_error: "form not submitted!"
			});
		}
		else {
			console.log(values);
			props.sendFeedback(values);
		}
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<div>
				<h2>
					Feedback Form
				</h2>
			</div>
			<div>
				<Field 
					name="name" 
					component={NameInp} 
				/>
			</div>
			<div>
				<Field name="email" component={EmailInp} type="email" />
			</div>
			<div>
				<Field name="feedback" component={FField} />
			</div>
			<div>
				<Field name="hire" component={Hire} />
			</div>
			<div>
				{submitFailed && <strong>{error}</strong>}
			</div>
			<div>
				{props.feedback.name && message.success(`Thanks for your feedback, ${props.feedback.name}`)}
			</div>
			<div>
				{props.feedback.error && message.error(`Error: ${props.feedback.name}`)}
			</div>

			<button type="submit" style={{marginBottom: "2rem"}}>Submit</button>
		</form>
	);
};

FeedbackForm = reduxForm({
	form: "feedback"
})(FeedbackForm);

export default FeedbackForm;