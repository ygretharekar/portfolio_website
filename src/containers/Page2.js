import React, { Component } from "react";
import { connect } from "react-redux";

import {Layout, Row, Col, Card } from "antd";
const {Content} = Layout;

export class FrontEndContent extends Component {

	render() {
		return (
			<div>
				<Layout style={{ padding: "24px 0", background: "#fff" }}>
					<Content style={{ padding: "0 24px", minHeight: 80 }}>
						<Row>
							<Col span={6}>
								<Card 
									title="Simon Game" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Build a Simon Game' 
											src={
												"//codepen.io/ygr/embed/OmarGX/?height=265&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/OmarGX/'>
												Build a Simon Game
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is Simon Game made with HTML, CSS, Jquery.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="Wikipedia Viewer" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Build a Wikipedia Viewer' 
											src={
												"//codepen.io/ygr/embed/vxbyOR/?height=265&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/vxbyOR/'>
												Build a Wikipedia Viewer
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
								<Card 
									title="Calculator" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Build a JavaScript Calculator' 
											src={
												"//codepen.io/ygr/embed/NjroMy/?height=265&"
												+ "theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/NjroMy/'>
												Build a JavaScript Calculator
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is Calculator made with
										HTML, SCSS, jquery.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="Random Quote Machine" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Random Quote Machine' 
											src={
												"//codepen.io/ygr/embed/BWOxJB/?height=265&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/BWOxJB/'>
												Random Quote Machine
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is Random Quote Generator 
										made with HTML, CSS, JQuery. 	
									</p>
								</Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(FrontEndContent);