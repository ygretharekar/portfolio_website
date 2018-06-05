import React, { Component } from "react";
import { connect } from "react-redux";

import {Table, Tabs} from "antd";
import Screens from "./ScreensPage";

const TabPane = Tabs.TabPane;

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name"
	}, 
	{
		title: "Description",
		dataIndex: "description",
		key: "description"
	},
	{
		title: "Source",
		dataIndex: "source",
		key: "source"
	}
];

const data = [
	{
		name: "Todo App",
		description: "Todo App made with flutter and redux",
		source: <a href="https://github.com/ygretharekar/todo_redux_app_flutter">Github</a>
		
	},
	{
		name: "Startup Namer",
		description: "Select a name for your startup",
		source: <a href="https://github.com/ygretharekar/todo_redux_app_flutter">Github</a>
		
	},
	{
		name: "Expense Analysis",
		description: "Log Your Expenses",
		source: <a href="https://github.com/ygretharekar/exp_an">Github</a>
	}
];

class FrontEndContent extends Component {


	render() {
		return (
			<div>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Projects" key="1">
						<Table columns={columns} dataSource={data} />
					</TabPane>
					<TabPane tab="Screenshots" key="2">
						<Screens />
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	step: state.steps.STEP
});

export default connect(mapStateToProps)(FrontEndContent);
//https://pinterest-clone-ygretharekar.c9users.io/
