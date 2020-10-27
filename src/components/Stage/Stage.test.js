import React from 'react';
import { shallowWrapper } from 'helpers/test-helper';
import Stage from '.';

describe('<Stage>', () => {
  const props = {
    dlc: 0,
    id: 1,
    name: 'Random'
  };
  const container = shallowWrapper(<Stage {...props} />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
