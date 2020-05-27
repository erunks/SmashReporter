import React from 'react';
import { shallow } from 'enzyme';
import FighterSelection from './index.jsx';

describe('<FighterSelection>', () => {
  const props = {
    initFighters: [{}],
    selectingPlayer: 0,
    setPlayerFighter: () => {}
  };
  const container = shallow(<FighterSelection {...props}/>);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
