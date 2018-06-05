import React, { Component } from "react";
import { Input, Row, Col, Icon } from "antd";

export default class EmailInp extends Component {
	render() {
		const { input: { value, onChange } } = this.props;
		return (
			<div style={{ margin: "1rem 0 1rem 0" }}>
				<Row>
					<Col span={4} />
					<Col span={16} >
						<Input
							prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
							onChange={onChange}
							value={value}
							placeholder='Please enter your email'
							type="email"
						/>
					</Col>
					<Col span={4} />
				</Row>
			</div>
		);
	}
}
