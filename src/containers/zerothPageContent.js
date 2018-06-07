import React, { Component } from "react";
import { connect } from "react-redux";
import Page1 from "./FrontEndContent";
import Page2 from "./Page2";
import Page3 from "./Page3";
import DataP1 from "./DataVizP1";
import DataP2 from "./DataVizP2";
import BEPage1 from "./BEPage1";
import PJPage1 from "./PJPage1";
import APage1 from "./APage1";


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
		/* 
			console.log("====================================");
			console.log("click", e);
			console.log("===================================="); 
		*/

		switch (e.key) {
		case "1":
			this.setState({content: <Page1 />});
			break;

		case "2":
			this.setState({content: <Page2 />});
			break;

		case "3":
			this.setState({content: <Page3 />});
			break;

		case "4":
			this.setState({content: <DataP1 />});
			break;

		case "5":
			this.setState({content: <DataP2 />});
			break;

		case "6":
			this.setState({content: <BEPage1 />});
			break;

		case "7":
			this.setState({content: <PJPage1 />});
			break;

		case "8":
			this.setState({ content: <APage1 /> });
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
							defaultOpenKeys={["sub1"]}
							style={{ height: "100%" }}
							onClick={this.handleClick.bind(this)}
						>
							<SubMenu key="sub1" title={<span><Icon type="laptop" />Front End</span>}>
								<Menu.Item key="1">Page 1</Menu.Item>
								<Menu.Item key="2">Page 2</Menu.Item>
								<Menu.Item key="3">Page 3</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" title={<span><Icon type="line-chart" />Data Viz</span>}>
								<Menu.Item key="4">Page 1</Menu.Item>
								<Menu.Item key="5">Page 2</Menu.Item>
							</SubMenu>
							<SubMenu key="sub3" title={<span><Icon type="database" />Back End</span>}>
								<Menu.Item key="6">Page 1</Menu.Item>
							</SubMenu>
							<SubMenu key="sub4" title={<span><Icon type="code" />Python Django</span>}>
								<Menu.Item key="7">Page 1</Menu.Item>
							</SubMenu>
							<SubMenu key="sub5" title={<span><Icon type="android" />Android</span>}>
								<Menu.Item key="8">Page 1</Menu.Item>
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

export default connect(mapStateToProps)(ZeroPage);