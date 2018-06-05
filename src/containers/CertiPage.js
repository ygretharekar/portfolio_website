import React, { Component } from "react";
import { connect } from "react-redux";

import {Layout, Collapse} from "antd";
const Panel = Collapse.Panel;
const {Content} = Layout;

export class ZeroPage extends Component {

	render() {
		return (
			<div>
				<Layout style={{ padding: "5rem", background: "#fff" }}>
					<Content>
						<Collapse accordion>
							<Panel header="Front End Developer Certificate" key="1">
								<a 
									href ="https://freecodecamp.org/certification/ygretharekar/legacy-front-end"
								>
									See Certificate here.
								</a>
							</Panel>
							<Panel header="Data Visualization Certificate" key="2">
								<a href="https://freecodecamp.org/certification/ygretharekar/legacy-data-visualization">
									See Certificate here.
								</a>
							</Panel>
							<Panel header="Back End Developer Certificate" key="3">
								<a href="https://freecodecamp.org/certification/ygretharekar/legacy-back-end">
									See Certificate here.
								</a>
							</Panel>
						</Collapse>
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

export default connect(mapStateToProps, mapDispatchToProps)(ZeroPage);