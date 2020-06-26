import React from 'react';
import { RecoilRoot } from 'recoil';
import { mount } from 'enzyme';
import Fighter from '.';

describe('<Fighter>', () => {
  const props = {
    dlc: 0,
    id: 1,
    name: 'Mario'
  };
  let container;

  beforeEach(() => {
    container = mount(
      <RecoilRoot>
        <Fighter {...props}/>
      </RecoilRoot>
    );
  });

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  // TODO: Fix these tests that broke after integrating RecoilJS

  // describe('when the fighter is clicked', () => {
  //   it('should call setPlayerFighter with the asset_name', () => {
  //     const asset_name = props.name.toLowerCase();
  //     const fighter = container.find('.fighter');
  //     fighter.simulate('click');

  //     expect(props.setPlayerFighter.calledWith(asset_name)).toBe(true);
  //   });
  // });

  // describe('when selectingPlayer is player 2', () => {
  //   it('should set the selection class appropriately', () => {
  //     const selection = container.find('.selection');

  //     expect(selection.hasClass('player-two')).toBe(true);
  //   })
  // });
});
