import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Fighter from './index.jsx';

describe('<Fighter>', () => {
  const props = {
    dlc: 0,
    id: 1,
    name: 'Mario',
    setPlayerFighter: spy()
  };
  const container = shallow(<Fighter selectingPlayer={0} {...props}/>);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  describe('when the fighter is clicked', () => {
    it('should call setPlayerFighter with the asset_name', () => {
      const asset_name = props.name.toLowerCase();
      const fighter = container.find('.fighter');
      fighter.simulate('click');

      expect(props.setPlayerFighter.calledWith(asset_name)).toBe(true);
    });
  });

  describe('when selectingPlayer is player 2', () => {
    const container = shallow(<Fighter selectingPlayer={1} {...props} />);

    it('should set the selection class appropriately', () => {
      const selection = container.find('.selection');

      expect(selection.hasClass('player-two')).toBe(true);
    })
  });
});
