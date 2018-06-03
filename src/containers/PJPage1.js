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
		title: "Website",
		dataIndex: "web",
		key: "web",
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
		name: "Library",
		web: <a href="https://cryptic-wave-71862.herokuapp.com/">Heroku</a>,
		description: "Library Manager made with django",
		source: <a href="https://github.com/ygretharekar/local-bookstore">Github</a>
		
	},
	{
		key: "2",
		name: "URL Shortener",
		web: <a href="https://shrouded-bayou-87994.herokuapp.com/">Heroku</a>,
		description: "Url shortner made with django",
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
