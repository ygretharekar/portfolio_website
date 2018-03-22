import React, { Component } from "react";
import Steps from "./containers/Steps";
import "./App.css";
import {Layout, Menu} from "antd";
const {Header, Content, Footer} = Layout;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		return (
			<div style={{height: this.state.height}}>
				<Layout style={{ height: "100%" }}>
					<Header className="header">
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={["2"]}
							style={{ lineHeight: "64px" }}
						>
							<Header style={{fontSize: "5rem"}}>
								Yashawant Retharekar
							</Header>
						</Menu>
					</Header>
					<Content style={{ padding: "0 50px" }}>
					
						<Steps />
					</Content>
					<Footer style={{ textAlign: "center" }}>
						<a href="mailto:yashwant.retharekar@gmail.com">
							Yashawant Ganesh Retharekar
						</a>
					</Footer>
				</Layout>
			</div>
		);
	}
}



export default App;