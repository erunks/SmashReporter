import React from 'react';
import { mountWrapper } from 'helpers/test-helper';
import App from '.';

describe('<App>', () => {
  const container = mountWrapper(<App/>);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
