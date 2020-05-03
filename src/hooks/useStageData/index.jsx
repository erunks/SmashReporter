import { useEffect, useState } from 'react';
import { getStages, getLegalStages } from '../../lib/api';

const useStageData = (legal) => {
  const [stages, setStages] = useState([{}]);

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

  return stages;
};

export default useStageData;
