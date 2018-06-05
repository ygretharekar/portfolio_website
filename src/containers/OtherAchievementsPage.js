import React, { Component } from "react";
import { connect } from "react-redux";

import foobar from "../static/foobar.png";
import no3 from "../static/wakatime no.3.png";
import no10 from "../static/wakatime no.10.png";

import {Tabs, Card} from "antd";
const TabPane = Tabs.TabPane;


export class OtherAchievements extends Component {

	render() {
		return (
			<div>
				<Tabs type="card">
					<TabPane tab="Tab 1" key="1">
						<Card title="Google foobar">
							<Card
								type="inner"
								title="I have cleared level 1 of google foobar challenge (Invitation only challege)"
								extra={<a href="https://foobar.withgoogle.com/">foobar</a>}
								cover={<img alt="foobar" src={foobar} />}
								style={{width:"50rem", margin:"auto"}}
							/>
						</Card>
					</TabPane>
					<TabPane tab="Tab 2" key="2">
						<Card title="Wakatime Leaderboard">
							<Card
								type="inner"
								title="I made it to no.3 on wakatime leaderboard"
								extra={<a href="https://wakatime.com/">Wakatime</a>}
								cover={<img alt="Wakatime No.3" src={no3} />}
								style={{ width: "50rem", margin: "auto" }}
							/>
						</Card>
					</TabPane>
					<TabPane tab="Tab 3" key="3">
						<Card title="Wakatime Leaderboard">
							<Card
								type="inner"
								title="I made it to no.10 on wakatime leaderboard"
								extra={<a href="https://wakatime.com/">Wakatime</a>}
								cover={<img alt="Wakatime No.10" src={no10} />}
								style={{width:"50rem", margin:"auto"}}
							/>
						</Card>
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	steps: state.steps.STEP
});

export default connect(mapStateToProps)(OtherAchievements);
