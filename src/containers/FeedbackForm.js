import React from "react";
import { Field, reduxForm } from "redux-form";

import NameInp from "./nameInput";
import EmailInp from "./emailInput";
import FField from "./feedbackField";
import Hire from "./hireMe";

let FeedbackForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h2>
					Feedback Form
				</h2>
			</div>
			<div>
				<Field name="feedback" component={NameInp} />
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
			<button type="submit" style={{marginBottom: "2rem"}}>Submit</button>
		</form>
	);
};

FeedbackForm = reduxForm({
	form: "feedback"
})(FeedbackForm);

export default FeedbackForm;