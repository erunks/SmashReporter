import React from 'react';
import { mountWrapper } from 'helpers/test-helper';
import Fighter from 'components/Fighter';
import FighterRow from '.';

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
  const container = mountWrapper(<FighterRow {...props} />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should contain as many fighters as passed in the fighterChunk', () => {
    expect(container.find(Fighter).length).toEqual(3);
  });
});
