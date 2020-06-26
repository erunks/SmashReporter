import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getStages, getLegalStages } from '../../lib/api';
import Stage from '../../components/Stage';

import './StageContainer.scss';

const StageContainer = ({ legal = true, initStages = [{}] }) => {
  const [stages, setStages] = useState(initStages);

  useEffect(() => {
    if (legal) {
      getLegalStages().then((legalStages) => {
        setStages(legalStages);
      });
    } else {
      getStages().then((stages) => {
        setStages(stages);
      });
    }
  }, [legal]);

  const stagesPopulated = () => Object.getOwnPropertyNames(stages[0]).length

  return (
    <div className="StageContainer">
      {stagesPopulated() && stages.map((stageData) => <Stage key={stageData.id} {...stageData} />)}
    </div>
  );
};

const {
  arrayOf,
  bool,
  object
} = propTypes;

StageContainer.propTypes = {
  legal: bool,
  initStages: arrayOf(object)
};

export default StageContainer;
