import React from 'react';
import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import App from './index.jsx';

describe('<App>', () => {
  const container = mount(
    <RecoilRoot>
      <App/>
    </RecoilRoot>
  );

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
