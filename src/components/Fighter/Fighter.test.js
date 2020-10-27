import React from 'react';
import { mountWrapper, wrappedRender } from 'helpers/test-helper';
import { selectingPlayerState } from 'recoils/player';
import Fighter from '.';

describe('<Fighter>', () => {
  const props = {
    dlc: 0,
    id: 1,
    name: 'Mario'
  };

  it('should match the snapshot', () => {
    const container = mountWrapper(
      <Fighter {...props} />,
      { initializeState: (snap) => { snap.set(selectingPlayerState, 0); } }
    );
    expect(container.html()).toMatchSnapshot();
  });

  test('when the selectingPlayer is player two, the selection should have the accompanying class', () => {
    wrappedRender(
      <Fighter {...props} />,
      { initializeState: (snap) => { snap.set(selectingPlayerState, 1); } }
    );

    const selection = document.querySelector('.player-two');
    expect(selection).toBeInTheDocument();
  });
});
