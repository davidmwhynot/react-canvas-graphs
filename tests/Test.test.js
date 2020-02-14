import React from 'react';
import { Test } from '../build/index.module';
import renderer from 'react-test-renderer';

test('Test', () => {
	const component = renderer.create(
		<div>
			<Test>Test</Test>
		</div>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
