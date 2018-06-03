import React, { Component } from "react";
import { connect } from "react-redux";

import {Layout, Row, Col, Card, Alert } from "antd";
const {Content} = Layout;

export class Page3 extends Component {

	render() {
		return (
			<div>
				<Layout style={{ padding: "24px 0", background: "#fff" }}>
					<Content style={{ padding: "0 24px", minHeight: 80 }}>
						<Row>
							<Col span={6}>
								<Card 
									title="Local weather"
									bordered={false}
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Show The Local Weather' 
											src={
												"//codepen.io/ygr/embed/yMRXMG/?height=265&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%" }}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/yMRXMG/'>
												Show The Local Weather
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This app tells your Local Weather
										made with openweather API, JQuery, CSS, HTML.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="twitch.tv JSON API" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Twitch.tv JSON API' 
											src={
												"//codepen.io/ygr/embed/KmKvPE/?height=265&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/KmKvPE/'>
												Twitch.tv JSON API
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is Wikipedia Viewer.
										Made with HTML, CSS, JQuery, Ajax.
									</p>
								</Card>
							</Col>
							<Col span={6}>
							</Col>
							<Col span={6}>
								<Alert
									message = "See More Projects on my Codepen"
									style = {{ width: 200, marginTop: "5rem" }}
								/>
							</Col>
						</Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page3);