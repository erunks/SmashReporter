import React from 'react';
import { shallow } from 'enzyme';
import FighterContainer from './index.jsx';

describe('<FighterContainer>', () => {
  const container = shallow(<FighterContainer />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
