import React, { Component } from "react";
import { Input, Row, Col, Icon, Alert } from "antd";

export default class EmailInp extends Component {
	render() {
		const { input, meta: { touched, error } } = this.props;
		return (
			<div style={{ margin: "1rem 0 1rem 0" }}>
				<Row>
					<Col span={4} />
					<Col span={16} >
						<Input
							prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
							{...input}
							placeholder='Please enter your email'
							type="email"
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
