import React, { Component } from 'react';

import './Test.scss';
export class Test extends Component {
	render() {
		return (
			<div style={{ padding: '3px 7px' }}>
				<span>{this.props.children}</span>
			</div>
		);
	}
}
