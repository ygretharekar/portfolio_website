import React, { Component } from "react";
import { connect } from "react-redux";
import { change_step } from "../actionPath";

import {Steps, Button, message} from "antd";
const Step = Steps.Step;

const steps = [
	{
		title: "First",
		content: "First-content",
	}, 
	{
		title: "Second",
		content: "Second-content",
	}, 
	{
		title: "Last",
		content: "Last-content",
	}
];



class StepsCont extends Component {

	render() {
		return (
			<div>
				<Step current={this.props.step} >
					{
						steps.map(
							item => <Step key={item.title} title={item.title} />	
						)
					}
				</Step>
				
				<div className="steps-content">
					{
						steps[this.props.step].content
					}
				</div>
				<div className="steps-action">
					{
						this.props.step < 2
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
						this.props.step === 2
						&&
						<Button 
							type="primary" 
							onClick={
								() => message.success(
									"Processing complete!"
								)
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
