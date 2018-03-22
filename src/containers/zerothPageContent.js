import React, { Component } from "react";
import { connect } from "react-redux";
import Page1 from "./FrontEndContent";
import Page2 from "./Page2";

import {Layout, Menu, Icon} from "antd";
const {SubMenu} = Menu;
const {Content, Sider} = Layout;


export class ZeroPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			content: <Page1 />
		};
	}
	
	handleClick(e) {
		console.log("====================================");
		console.log("click", e);
		console.log("====================================");

		switch (e.key) {
		case "1":
			this.setState({content: <Page1 />});
			break;
		case "2":
			this.setState({content: <Page2 />});
			break;
		
		default:
			break;
		}
	}

	render() {
		return (
			<div>
				<Layout style={{ padding: "24px 0", background: "#fff" }}>
					<Sider width={200} style={{ background: "#fff" }}>
						<Menu
							mode="inline"
							defaultSelectedKeys={["1"]}
							style={{ height: "100%" }}
							onClick={this.handleClick.bind(this)}
						>
							<SubMenu key="sub1" title={<span><Icon type="laptop" />Front End</span>}>
								<Menu.Item key="1">Page 1</Menu.Item>
								<Menu.Item key="2">Page 2</Menu.Item>
								<Menu.Item key="3">Page 3</Menu.Item>
								<Menu.Item key="4">Page 4</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" title={<span><Icon type="line-chart" />Data Viz</span>}>
								<Menu.Item key="5">option5</Menu.Item>
								<Menu.Item key="6">option6</Menu.Item>
								<Menu.Item key="7">option7</Menu.Item>
								<Menu.Item key="8">option8</Menu.Item>
							</SubMenu>
							<SubMenu key="sub3" title={<span><Icon type="database" />Back End</span>}>
								<Menu.Item key="9">option9</Menu.Item>
								<Menu.Item key="10">option10</Menu.Item>
								<Menu.Item key="11">option11</Menu.Item>
								<Menu.Item key="12">option12</Menu.Item>
							</SubMenu>
							<SubMenu key="sub4" title={<span><Icon type="code" />Python Django</span>}>
								<Menu.Item key="9">option9</Menu.Item>
								<Menu.Item key="10">option10</Menu.Item>
								<Menu.Item key="11">option11</Menu.Item>
								<Menu.Item key="12">option12</Menu.Item>
							</SubMenu>
							<SubMenu key="sub5" title={<span><Icon type="android" />Android</span>}>
								<Menu.Item key="9">option9</Menu.Item>
								<Menu.Item key="10">option10</Menu.Item>
								<Menu.Item key="11">option11</Menu.Item>
								<Menu.Item key="12">option12</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Content style={{ padding: "0 24px", minHeight: 80 }}>
						{this.state.content}
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