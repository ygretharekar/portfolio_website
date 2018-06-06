import React, { Component } from "react";
import { connect } from "react-redux";
import { change_step } from "../actionPath";

import ProjectPage from "./zerothPageContent";
import PIPPage from "./PIPage";
import CertiPage from "./CertiPage";
import Other from "./OtherAchievementsPage";
import Edu from "./EduPage";
import FForm from "./FeedbackForm";

import {Steps, Button, message} from "antd";
const Step = Steps.Step;

const steps = [
	{
		title: "Objectives",
		content: <PIPPage />,
	}, 
	{
		title: "Certificates",
		content: <CertiPage />,
	},
	{
		title: "Projects",
		content : <ProjectPage/>,
	},
	{
		title: "Education",
		content: <Edu />,
	},
	{
		title: "Other Achievements",
		content: <Other />,
	},
	{
		title: "Feedback",
		content: <FForm onSubmit={this.submit} />,
	}
];



class StepsCont extends Component {

	render() {

		return (
			<div>
				<Steps className='steps-action'	 current={this.props.step} >
					{
						steps.map(
							item => <Step 
								key={item.title} 
								title={item.title}
							/>
						)
					}
				</Steps>
				
				<div className="steps-content" >
					{
						steps[this.props.step].content
					}
				</div>
				<div className="steps-action">
					{
						this.props.step < 5
						&&
						<Button 
							type="primary" 
							onClick={
								() => this.props.change_step({STEP: this.props.step + 1})
							}
						>
							Next
						</Button>
					}
					{
						this.props.step === 5
						&&
						<Button 
							type="primary" 
							onClick={
								() => {
									this.props.change_step({STEP: 0});
									message.success(
										"Thank you!!"
									);
	
								}
							}
						>
							Done
						</Button>
					}
					{
						this.props.step > 0
						&&
						<Button 
							style={{ marginLeft: 8 }} 
							onClick={
								() => this.props.change_step({STEP: this.props.step - 1} )
							}
						>
							Previous
						</Button>
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	red: state.red,
	step: state.steps.STEP
});

const mapDispatchToProps = {
	change_step
};

export default connect(mapStateToProps, mapDispatchToProps)(StepsCont);
