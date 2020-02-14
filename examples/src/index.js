import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Test } from 'react-canvas-graphs';

const Application = () => (
	<Fragment>
		<div id="sidebar">
			<ul>
				<li>
					<a href="#test" className="link">
						Test
					</a>
				</li>
			</ul>
		</div>
		<iframe src="./test.html" />
	</Fragment>
);

window.addEventListener('load', () => {
	const iframe = document.querySelector('iframe');

	for (let link of document.querySelectorAll('a.link')) {
		link.addEventListener('click', e => {
			iframe.src = e.target.href.replace('#', '') + '.html';
		});
	}
});

ReactDOM.render(<Application />, document.getElementById('app'));
