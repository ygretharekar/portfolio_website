import React, { Component } from "react";
import Steps from "./containers/Steps";
import "./App.css";
import {Layout, Menu} from "antd";
const {Header, Content, Footer} = Layout;

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Header className="header">
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={["2"]}
							style={{ lineHeight: "64px" }}
						>
							<Menu.Item key="1">nav 1</Menu.Item>
							<Menu.Item key="2">nav 2</Menu.Item>
							<Menu.Item key="3">nav 3</Menu.Item>
						</Menu>
					</Header>
					<Content style={{ padding: "0 50px" }}>
						<Steps />					
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Yashawant Ganesh Retharekar
					</Footer>
				</Layout>
			</div>
		);
	}
}



export default App;