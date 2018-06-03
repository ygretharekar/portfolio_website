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
									title="Meteor Landings Across the Globe" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Map Data Across the Globe' 
											src={
												"//codepen.io/ygr/embed/eGBzeN/?height=265&"+ 
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/eGBzeN/'>
												Map Data Across the Globe
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This Meteor Data Across the GLobe 
										made with react.js, d3.js.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="USA GDP Bar  Chart" 
									bordered={false} 
									style={{ width: 250 }}
								>
								
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Visualize Data with a Bar Chart' 
											src={
												"//codepen.io/ygr/embed/prrVXd/?height=265&"+
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/prrVXd/'>
												Visualize Data with a Bar Chart
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is USA GDP Bar chart,
										Made with HTML, SCSS, d3.js.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="Land Surface Temp. Heat Map" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Visualize Data with a Heat Map' 
											src={
												"//codepen.io/ygr/embed/ZJPNKQ/?height=265&" +
												"theme-id=0&default-tab=result&embed-version=2"
											}
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/ZJPNKQ/'>
												Visualize Data with a Heat Map
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is Monthly Global Land-Surface Temperature Heat Map,
										Made with HTML, SCSS, d3.js.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="Tour de France winner timings (Scatterplot)" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Visualize Data with a Scatterplot Graph' 
											src={
												"//codepen.io/ygr/embed/brvYge/?height=265&" +
												"theme-id=0&default-tab=result&embed-version=2"
											}
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/brvYge/'>
												Visualize Data with a Scatterplot Graph
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is scatterplot graph showing winner 
										timing over the years. Hover over each dot to
										know more made using d3.js.
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