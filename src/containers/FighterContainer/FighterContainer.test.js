import React from 'react';
import { fireEvent, mountWrapper, wrappedRender } from 'helpers/test-helper';
import { fighterState } from 'recoils/fighter';
import { selectingPlayerState } from 'recoils/player';
import FighterChoice from 'components/FighterChoice';
import FighterSelection from 'components/FighterSelection';
import FighterContainer from '.';

describe('<FighterContainer>', () => {
  describe('when the fighters are not yet populated', () => {
    const container = mountWrapper(
      <FighterContainer />,
      { initializeState: (snap) => snap.set(fighterState, [{}]) }
    );

    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
    });

    it('should not render its subcomponents', () => {
      expect(container.find(FighterChoice).length).toEqual(0);
      expect(container.find(FighterSelection).length).toEqual(0);
    });
  });

  describe('when the fighters are populated', () => {
    const fighterStateData = [{
      dlc: 0,
      id: 1,
      name: 'Mario'
    }];

    const container = mountWrapper(
      <FighterContainer />,
      { initializeState: (snap) => snap.set(fighterState, fighterStateData) }
    );

    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
    });

    it('should contain all the appropriate subcomponents', () => {
      expect(container.find(FighterChoice).length).toEqual(2);
      expect(container.find(FighterSelection).length).toEqual(1);
    });
  });

  describe('functionality', () => {
    const fighterStateData = [
      {
        dlc: 0,
        id: 1,
        name: 'Mario'
      },
      {
        dlc: 0,
        id: 99,
        name: 'Random'
      },
    ];

    test('when the fighter choice is clicked, the selection should update accordingly', () => {
      const { unmount } = wrappedRender(
        <FighterContainer />,
        {
          initializeState: (snap) => {
            snap.set(fighterState, fighterStateData);
            snap.set(selectingPlayerState, 0);
          }
        }
      );

      const playerOneSelection = document.querySelector('.selection.player-one');
      expect(playerOneSelection).toBeInTheDocument();
      const fighterChoices = document.querySelectorAll('.FighterChoice');
      expect(fighterChoices.length).toBe(4);

      const playerTwoFighterChoice = fighterChoices[3];
      fireEvent.click(playerTwoFighterChoice);
      const playerTwoSelection = document.querySelector('.selection.player-two');
      expect(playerTwoSelection).toBeInTheDocument();

      unmount();
    });

    test('when a fighter is chosen, the fighter choice should update', () => {
      const { unmount } = wrappedRender(
        <FighterContainer />,
        {
          initializeState: (snap) => {
            snap.set(fighterState, fighterStateData);
            snap.set(selectingPlayerState, 0);
          }
        }
      );

      const playerOneFighterChoice = document.querySelectorAll('.FighterChoice')[0];
      expect(playerOneFighterChoice).toBeInTheDocument();
      expect(playerOneFighterChoice.getAttribute('alt')).toBe('fighter: random');

      const fighter = document.querySelector('.fighter');
      fireEvent.click(fighter);
      expect(playerOneFighterChoice.getAttribute('alt')).toBe('fighter: mario');

      unmount();
    });
  });
});
