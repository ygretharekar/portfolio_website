import React, { Component } from "react";
import { connect } from "react-redux";

import {Table} from "antd";

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
		key: "1",
		name: "Chatting App",
		description: "Chatting App Made with Dart (Flutter)",
		source: <a href="https://github.com/ygretharekar/local-bookstore">Github</a>
		
	},
	{
		key: "2",
		name: "Expense Logger",
		description: "Log Your Expenses",
		source: <a href="https://github.com/ygretharekar/urlshortner">Github</a>
	}
];

export class FrontEndContent extends Component {

	render() {
		return (
			<div>
				<Table columns={columns} dataSource={data} />
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
//https://pinterest-clone-ygretharekar.c9users.io/
