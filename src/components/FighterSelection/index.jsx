import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import chunk from 'lodash/chunk';
import { getFighters } from '../../lib/api';
import FighterRow from '../FighterRow/index.jsx';

import './FighterSelection.scss';

const FighterSelection = ({ initFighters = [{}], ...passThroughProps }) => {
  const [fighters, setFighters] = useState(initFighters);

  useEffect(() => {
    getFighters().then((fighters) => {
      setFighters(fighters);
    });
  }, [])

  const fightersPopulated = () => Object.getOwnPropertyNames(fighters[0]).length

  return (
    <div className="FighterSelection">
      {
        fightersPopulated() && chunk(fighters, 12).map((fighterChunk, index) => <FighterRow
            key={`fighterRow${index}`}
            fighterChunk={fighterChunk}
            {...passThroughProps}
          />)
      }
    </div>
  )
};

const {
  arrayOf,
  func,
  number,
  object
} = propTypes;

FighterSelection.propTypes = {
  initFighters: arrayOf(object),
  selectingPlayer: number.isRequired,
  setPlayerFighter: func.isRequired
};

export default FighterSelection;
