import React from 'react';
import { Test } from '../build/rrpm.module';
import renderer from 'react-test-renderer';

test('PopupTable', () => {
	const component = renderer.create(
		<div>
			<Test>Test</Test>
		</div>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
