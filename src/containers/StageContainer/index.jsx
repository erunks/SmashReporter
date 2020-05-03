import React from 'react';
import propTypes from 'prop-types';
import withStageData from '../../hoc/withStageData/index.jsx';
import Stage from '../../components/Stage/index.jsx';

import './StageContainer.scss';

const StageContainer = ({ legal, stages = [] }) => {
  const stageDataPopulated = () => Object.getOwnPropertyNames(stages[0]).length

  return (
    <div className="StageContainer">
      {stageDataPopulated() && stages.map((stageData) => <Stage key={stageData.id} {...stageData} />)}
    </div>
  );
};

const {
  arrayOf,
  bool,
  object
} = propTypes;

StageContainer.propTypes = {
  legal: bool.isRequired,
  stages: arrayOf(object).isRequired
};

export default withStageData(StageContainer);
