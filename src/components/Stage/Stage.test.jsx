import React from 'react';
import { shallow } from 'enzyme';
import Stage from './index.jsx';

describe('<Stage>', () => {
  const props = {
    dlc: 0,
    id: 1,
    name: 'Random'
  };
  const container = shallow(<Stage {...props}/>);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
