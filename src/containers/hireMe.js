import React, { Component } from "react";
import { Row, Col, Checkbox } from "antd";

export default class EmailInp extends Component {
	render() {
		const { input: { value, onChange } } = this.props;
		return (
			<div style={{ margin: "1rem 0 1rem 0" }}>
				<Row>
					<Col span={4} />
					<Col span={16} >
						<h3 style={{float:"left"}}>Would you like to hire me: </h3>
						<Checkbox
							checked = {value}
							onChange = {onChange} 
							style={{float:"right"}}
						/>
					</Col>
					<Col span={4} />
				</Row>
			</div>
		);
	}
}
