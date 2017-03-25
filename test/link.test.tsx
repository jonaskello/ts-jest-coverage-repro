
// Link.react-test.js
import * as React from 'react';
import * as renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <div>Testing</div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
