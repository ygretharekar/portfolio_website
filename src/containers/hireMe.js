import React, { Component } from "react";
import { Row, Col, Checkbox, Alert } from "antd";

export default class EmailInp extends Component {
	render() {
		const { input: { value, onChange }, meta: { touched, error } } = this.props;
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
						{
							touched &&
							error &&
							<Alert message={error} type="error" style={{ margin: "2rem 0 1rem 0" }} />
						}
					</Col>
					<Col span={4} />
				</Row>
			</div>
		);
	}
}
