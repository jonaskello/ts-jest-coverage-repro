import * as React from 'react';
import * as renderer from 'react-test-renderer';

test('Test react component', () => {
  const component = renderer.create(
    <div>Testing</div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
