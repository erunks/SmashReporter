import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import FighterSelection from './index.jsx';

describe('<FighterSelection>', () => {
  const container = mount(
    <RecoilRoot>
      <FighterSelection/>
    </RecoilRoot>
  );

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
