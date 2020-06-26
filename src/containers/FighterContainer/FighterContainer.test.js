import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import FighterContainer from '.';
import FighterChoice from '../../components/FighterChoice';
import FighterSelection from '../../components/FighterSelection';

describe('<FighterContainer>', () => {
  const container = mount(
    <RecoilRoot>
      <FighterContainer />
    </RecoilRoot>
  );

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should contain all the appropriate subcomponents', () => {
    expect(container.find(FighterChoice).length).toEqual(2);
    expect(container.find(FighterSelection).length).toEqual(1);
  });
});
