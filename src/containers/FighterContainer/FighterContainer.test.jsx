import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import FighterContainer from './index.jsx';
import FighterChoice from '../../components/FighterChoice/index.jsx';
import FighterSelection from '../../components/FighterSelection/index.jsx';

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
