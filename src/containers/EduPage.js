import React, { Component } from "react";
import { connect } from "react-redux";

import { Table } from "antd";

const columns = [
	{
		title: "Degree",
		dataIndex: "degree",
		key: "degree"
	},
	{
		title: "College",
		dataIndex: "college",
		key: "college"
	},
	{
		title: "University",
		dataIndex: "university",
		key: "university",
	},
	{
		title: "Percentage",
		dataIndex: "percentage",
		key: "percentage"
	}
];

const data = [
	{
		degree: "B.E",
		college: <a href="http://mitcoe.ac.in/">MIT College of Engineering, Pune</a>,
		university: "Savitribai Phule Pune University",
		percentage: "62.2% (First Class)"
	},
	{
		degree: "Gate Qualification",
		college: "-",
		university: "-",
		percentage: <a 
			href="https://drive.google.com/file/d/0B82Mwxf2p48QS2doSEVzSkEzazA/view?usp=sharing"
		>
			41.16 (AIR: 3167, Qualified)
		</a>
	},
	{
		degree: "Front End Developer",
		college: "-",
		university: <a href="https://www.freecodecamp.org/portfolio/ygretharekar">freecodecamp.org</a>,
		percentage: "-"
	},
	{
		degree: "Data Visualization Developer",
		college: "-",
		university: <a href="https://www.freecodecamp.org/portfolio/ygretharekar">freecodecamp.org</a>,
		percentage: "-"
	},
	{
		degree: "Back End Developer",
		college: "-",
		university: <a href="https://www.freecodecamp.org/portfolio/ygretharekar">freecodecamp.org</a>,
		percentage: "-"
	}
];


class Edu extends Component {

	render() {
		return (
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	steps: state.steps.STEP
});

export default connect(mapStateToProps)(Edu);
