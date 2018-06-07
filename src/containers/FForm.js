import { connect } from "react-redux";
import FeedbackForm from "./FeedbackForm";
import { sendFeedback } from "../actionPath";

const mapStateToProps = (state) => ({
	feedback: state.feedback
});

const mapDispatchToProps = {
	sendFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
