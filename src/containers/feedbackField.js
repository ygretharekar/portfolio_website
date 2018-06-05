import React, { Component } from "react";
import { Input, Row, Col } from "antd";

const { TextArea } = Input;

export default class EmailInp extends Component {
	render() {
		const { input: { value, onChange } } = this.props;
		return (
			<div style={{ margin: "1rem 0 1rem 0" }}>
				<Row>
					<Col span={4} />
					<Col span={16} >
						<TextArea
							onChange={onChange}
							value={value}
							placeholder='Please write your feedback'
						/>
					</Col>
					<Col span={4} />
				</Row>
			</div>
		);
	}
}
