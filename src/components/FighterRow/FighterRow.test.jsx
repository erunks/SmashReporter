import React from 'react';
import { shallow } from 'enzyme';
import FighterRow from './index.jsx';
import Fighter from '../Fighter/index.jsx';

describe('<FighterRow>', () => {
  const props = {
    fighterChunk: [
      {
        dlc: 0,
        id: 1,
        name: 'Mario'
      },
      {
        dlc: 0,
        id: 2,
        name: 'Donkey Kong'
      },
      {
        dlc: 0,
        id: 3,
        name: 'Link'
      }
    ],
    selectingPlayer: 0,
    setPlayerFighter: () => {}
  };
  const container = shallow(<FighterRow {...props} />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should contain as many fighters as passed in the fighterChunk', () => {
    expect(container.find(Fighter).length).toEqual(3);
  });
});