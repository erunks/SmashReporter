import React from 'react';
import { mount, shallow } from 'enzyme';
import StageContainer from './index.jsx';
import Stage from '../../components/Stage/index.jsx';

describe('<StageContainer>', () => {
  const props = {
    legal: true,
    initStages: [
      {
        dlc: 0,
        id: 1,
        name: 'Battlefield'
      },
      {
        dlc: 0,
        id: 3,
        name: 'Final Destination'
      }
    ]
  };

  it('should match the snapshot', () => {
    const container = shallow(<StageContainer {...props} />);
    expect(container.html()).toMatchSnapshot();
  });

  it('should render the same number of Stage components as stages', () => {
    const container = mount(<StageContainer {...props} />);
    expect(container.find(Stage).length).toEqual(props.initStages.length);
  })
});
