import React, { Component } from "react";
import { connect } from "react-redux";

import me from "../static/me.png";
import {Layout, Card, Avatar, List, Alert} from "antd";
const {Content} = Layout;

const data = [
	{
		title: "Web",
		content: "MERN Stack (MongoDB, Express.js, React.js, Node.js) and Python Django."
	},
	{
		title: "Android",
		content: "Flutter (dart). Flutter is a hybrid App development platform, made by Google."
	}
];


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
								Seeking the position of a <b>Full Stack/Android Developer</b> to 
								further enhance organizational 
								worth owing to my knowledge in {" "}
								<em>
									<code>
										Python, Django, HTML, CSS, Node.js, React.js, Redux, Flutter (Dart).
									</code>
								</em> 
							</p>

							<Alert message="Skills: " type="info" style={{margin:"2rem 0 1rem 0"}} />

							<List
								grid={{ gutter: 16, column: 2 }}
								dataSource={data}
								renderItem={item => (
									<List.Item>
										<Card title={item.title}>{item.content}</Card>
									</List.Item>
								)}
							/>
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