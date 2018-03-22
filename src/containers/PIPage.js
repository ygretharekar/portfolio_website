import React, { Component } from "react";
import { connect } from "react-redux";

import me from "../static/me.png";
import {Layout, Card, Avatar} from "antd";
const {Content} = Layout;

export class ZeroPage extends Component {

	render() {
		return (
			<div>
				<Layout style={{ padding: "24px 0", background: "#fff" }}>
					<Content style={{ padding: "0 24px", minHeight: 80 }}>
						<Card title="Yashawant Ganesh Retharekar">
							<Avatar
								shape="square" 
								size = "large" 
								icon = "user"
								src = {me}
							/>
							<p>
								Seeking the position of a Full Stack Developer to 
								further enhance organizational 
								worth owing to my knowledge in 
								Python, Django, HTML, CSS, Node.js, React.js, Redux, Dart (Flutter).
							</p>
						</Card>
					</Content>
				</Layout>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	step: state.steps.STEP
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ZeroPage);