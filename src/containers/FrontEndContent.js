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
									title="Dungeon Crawler Game" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Build a Roguelike Dungeon Crawler Game' 
											src={
												"//codepen.io/ygr/embed/JJLJWJ/?height=265&theme-id=0&" +
												"default-tab=result&embed-version=2"
											} 
											frameborder='no'
											allowtransparency='true'
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/JJLJWJ/'>
												Build a Roguelike Dungeon Crawler Game
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on <a href='https://codepen.io'>CodePen</a>.
										</iframe>
									</div>
									<p>
										This is Roguelike Dungeon Crawler Game 
										made using scss, react, redux. 
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="Conway's Game of Life" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Build the Game of Life' 
											src={
												"//codepen.io/ygr/embed/mwWXjR/?height=150&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/mwWXjR/'>
												Build the Game of Life
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>
												CodePen
											</a>.
										</iframe>
									</div>
									<p>
										This project is based on {" "}
										<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
											Conway's Game of Life
										</a>. 
										Made with scss, react.js.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="Tic Tac Toe Game" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Build a Tic Tac Toe Game' 
											src={
												"//codepen.io/ygr/embed/WjyQPd/?height=150&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/WjyQPd/'>
												Build a Tic Tac Toe Game
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>
												CodePen
											</a>.
										</iframe>
									</div>
									<p>
										This is Tic Tac Toe Game made with
										HTML, SCSS, jquery.
									</p>
								</Card>
							</Col>
							<Col span={6}>
								<Card 
									title="Pomodoro Clock" 
									bordered={false} 
									style={{ width: 250 }}
								>
									<div>
										<iframe 
											height='150' 
											scrolling='no' 
											title='Build a Pomodoro Clock' 
											src={
												"//codepen.io/ygr/embed/xdgQwe/?height=150&" +
												"theme-id=0&default-tab=result&embed-version=2"
											} 
											frameborder='no' 
											allowtransparency='true' 
											allowfullscreen='true' 
											style={{width: "100%"}}
										>
											See the Pen 
											<a href='https://codepen.io/ygr/pen/xdgQwe/'>
												Build a Pomodoro Clock
											</a> 
											by Yashawant Retharekar 
											(<a href='https://codepen.io/ygr'>@ygr</a>) 
											on 
											<a href='https://codepen.io'>
												CodePen
											</a>.
										</iframe>
									</div>
									<p>
										This is Pomodoro Timer.
										Made with HTML, CSS, Jquery.
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