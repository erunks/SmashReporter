import React from 'react';
import { mountWrapper } from 'helpers/test-helper';
import StageContainer from '.';

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

  const container = mountWrapper(<StageContainer {...props} />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should render the selected stage', () => {
    expect(container.find('.SelectedStage > Stage').length).toEqual(1);
  });

  it('should render the same number of Stage components as stages', () => {
    expect(container.find('.StagePicker > Stage').length).toEqual(props.initStages.length);
  });
});
