import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { getSelectedStage } from 'recoils/stage';
import Stage from 'components/Stage';
import MainLayout from 'containers/MainLayout';
import { getStages, getLegalStages } from 'lib/api';

import './StageContainer.scss';

const StageContainer = ({ legal = true, initStages = [{}] }) => {
  const onlyLegal = typeof (legal) === 'boolean' ? legal : (legal === 'true');
  const selectedStage = useRecoilValue(getSelectedStage);
  const [stages, setStages] = useState(initStages);

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
  }, [onlyLegal, stages]);

  const stagesPopulated = () => Object.getOwnPropertyNames(stages[0]).length
  const renderSelectedStage = () => (
    <div className="SelectedStage">
      <Stage
        displayName={true}
        key={ `selectedStage ${selectedStage}` }
        { ...stages[selectedStage] }
      />
    </div>
  );

  return (
    <MainLayout>
      <div className="StageContainer">
        { stagesPopulated() && renderSelectedStage() }
        <div className="StagePicker">
          { stagesPopulated() && stages.map((stageData) => <Stage key={stageData.id} {...stageData} />) }
        </div>
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
