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
		title: "Problem Statement",
		dataIndex: "problem",
		key: "problem"
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
		name: "Pinterest Clone",
		web: <a href="https://pinterest-clone-ygretharekar.c9users.io/">Cloud9</a>,
		problem: <a href="https://www.freecodecamp.org/challenges/Build%20a%20Pinterest%20Clone">
					freecodecamp
		</a>,
		source: <a href="https://github.com/ygretharekar/pinterest">Github</a>
		
	}, 
	{
		key: "2",
		name: "Book Trading Club",
		web: <a href="https://bookclub-ygretharekar.c9users.io/">Cloud9</a>,
		problem: <a href="https://www.freecodecamp.org/challenges/Manage%20a%20Book%20Trading%20Club">
					freecodecamp
		</a>,
		source: <a href="https://github.com/ygretharekar/bookclub">Github</a>
	},
	{
		key: "3",
		name: "Chart Stock Market",
		web: <a href="https://chart-stock-market.glitch.me/">Glitch</a>,
		problem: <a href="https://www.freecodecamp.org/challenges/Chart%20the%20Stock%20Market">
					freecodecamp
		</a>,
		source: <a href="https://github.com/ygretharekar/stock_market">Github</a>
	},
	{
		key: "4",
		name: "Nightlife Coordinator App",
		web: <a href="https://zomato-app.glitch.me/">Glitch</a>,
		problem: <a href="https://www.freecodecamp.org/challenges/Build%20a%20Nightlife%20Coordination%20App">
					freecodecamp
		</a>,
		source: <a href="https://github.com/ygretharekar/stock_market">Github</a>
	},
	{
		key: "5",
		name: "Voting App",
		web: <a href="https://voting-app-ygretharekar.c9users.io/">Cloud 9</a>,
		problem: <a href="https://www.freecodecamp.org/challenges/Build%20a%20Voting%20App">
					freecodecamp
		</a>,
		source: <a href="https://github.com/ygretharekar/stock_market">Github</a>
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
