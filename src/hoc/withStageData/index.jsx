import React from 'react';
import useStageData from '../../hooks/useStageData/index.jsx';

const withStageData = (Comp) => (props) => {
  const stageData = useStageData(props.legal);

  return <Comp stages={stageData} {...props}/>;
};

export default withStageData;
