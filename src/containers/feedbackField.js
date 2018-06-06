import React, { Component } from "react";
import { Input, Row, Col, Alert } from "antd";

const { TextArea } = Input;

export default class EmailInp extends Component {
	render() {
		const { input, meta: { touched, error } } = this.props;
		return (
			<div style={{ margin: "1rem 0 1rem 0" }}>
				<Row>
					<Col span={4} />
					<Col span={16} >
						<TextArea
							{...input}
							placeholder='Please write your feedback'
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
