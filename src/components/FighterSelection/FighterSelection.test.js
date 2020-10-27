import React from 'react';
import { mountWrapper } from 'helpers/test-helper';
import { fighterState } from 'recoils/fighter';
import FighterSelection from '.';

describe('<FighterSelection>', () => {
  const fighterStateData = [{
    dlc: 0,
    id: 1,
    name: 'Mario'
  }];

  const container = mountWrapper(
    <FighterSelection />,
    { initializeState: (snap) => snap.set(fighterState, fighterStateData) }
  );

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
