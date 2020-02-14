import React from 'react';
import ReactDOM from 'react-dom';
import { Test } from 'react-canvas-graphs';

const Application = () => (
	<div className="centered">
		<Test>Some text</Test>
	</div>
);

ReactDOM.render(<Application />, document.getElementById('app'));
