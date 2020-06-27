import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getStages, getLegalStages } from '../../lib/api';
import MainLayout from '../MainLayout';
import Stage from '../../components/Stage';

import './StageContainer.scss';

const StageContainer = ({ legal = true, initStages = [{}] }) => {
  const [stages, setStages] = useState(initStages);
  const onlyLegal = typeof (legal) === 'boolean' ? legal : (legal === 'true');

  useEffect(() => {
    if (onlyLegal) {
      getLegalStages().then((legalStages) => {
        setStages(legalStages);
      });
    } else {
      getStages().then((stages) => {
        setStages(stages);
      });
    }
  }, [onlyLegal]);

  const stagesPopulated = () => Object.getOwnPropertyNames(stages[0]).length

  return (
    <MainLayout>
      <div className="StageContainer">
        {stagesPopulated() && stages.map((stageData) => <Stage key={stageData.id} {...stageData} />)}
      </div>
    </MainLayout>
  );
};

const {
  arrayOf,
  bool,
  object,
  oneOfType,
  string
} = propTypes;

StageContainer.propTypes = {
  legal: oneOfType([bool,string]),
  initStages: arrayOf(object)
};

export default StageContainer;
