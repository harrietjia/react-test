import React from 'react';
import {Row, Col} from 'antd';

export default class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	};

	render() {
		return (
				<footer>
					<Row>
						<Col span={2}></Col>
						<Col span={20} class="footer">
							&copy;&nbsp;2019 ReactNews.
						</Col>
						<Col span={2}></Col>
					</Row>
				</footer>
		);
	};
}
