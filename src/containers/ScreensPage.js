import React, { Component } from "react";
import { connect } from "react-redux";
import Datepicker from "../static/Datepicker.png";
import Categories from "../static/categories.png";
import Confirm from "../static/confirm transaction.png";
import Delete from "../static/delete transaction.png";
import Arcs from "../static/arcs.png";
import Details from "../static/details.png";
import { Card, Row, Col } from "antd";

export class Screens extends Component {
	
	render() {
		return (
			<div>
				<Row type="flex">
					<Col span={4} order={5}>
						<Card
							hoverable
							cover={<img alt="datepicker" src={Datepicker} />}
						>
							Modified Datepicker
						</Card>
					</Col>
					<Col span={4} order={2}>
						<Card
							hoverable
							cover={<img alt="drawer" src={Categories} />}
						>
							Drawer
						</Card>
					</Col>
					<Col span={4} order={3}>
						<Card
							hoverable
							cover={<img alt="confirm" src={Confirm} />}
						>
							Confirm Transactions
						</Card>
					</Col>
					<Col span={4} order={4}>
						<Card
							hoverable
							cover={<img alt="delete" src={Delete} />}
						>
							Delete Transaction
						</Card>
					</Col>
					<Col span={4} order={1}>
						<Card
							hoverable
							cover={<img alt="arcs" src={Arcs} />}
						>
							Arcs by categories
						</Card>
					</Col>
					<Col span={4} order={6}>
						<Card
							hoverable
							cover={<img alt="details" src={Details} />}
						>
							Details
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	steps: state.steps.STEP
});

export default connect(mapStateToProps)(Screens);
