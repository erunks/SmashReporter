import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import chunk from 'lodash/chunk';
import { useRecoilState } from 'recoil';
import { fighterState } from '../../recoils/fighter';
import { getFighters } from '../../lib/api';
import FighterRow from '../FighterRow/index.jsx';

import './FighterSelection.scss';

const FighterSelection = () => {
  const [fighters, setFighters] = useRecoilState(fighterState);

  useEffect(() => {
    getFighters().then((fighters) => {
      setFighters(fighters);
    });
  });

  const fightersPopulated = () => Object.getOwnPropertyNames(fighters[0]).length

  return (
    <div className="FighterSelection">
      {
        fightersPopulated() && chunk(fighters, 12).map(
          (fighterChunk, index) => <FighterRow
              key={`fighterRow${index}`}
              fighterChunk={fighterChunk}
            />
        )
      }
    </div>
  )
};

const {
  arrayOf,
  object
} = propTypes;

FighterSelection.propTypes = {
  initFighters: arrayOf(object)
};

export default FighterSelection;
