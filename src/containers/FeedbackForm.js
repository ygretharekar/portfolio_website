import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";

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
		else if (!values.textarea) {
			throw new SubmissionError({
				textarea: "please write feedback",
				_error: "form not submitted!"
			});
		}
		else {
			console.log(values);
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
				<Field name="textarea" component={FField} />
			</div>
			<div>
				<Field name="hire" component={Hire} />
			</div>
			<div>
				{submitFailed && <strong>{error}</strong>}
			</div>
			<button type="submit" style={{marginBottom: "2rem"}}>Submit</button>
		</form>


	);
};

FeedbackForm = reduxForm({
	form: "feedback"
})(FeedbackForm);

export default FeedbackForm;