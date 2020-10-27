import React from 'react';
import propTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { orderedFighters } from 'recoils/fighter';
import FighterRow from 'components/FighterRow';
import chunk from 'lodash/chunk';

import './FighterSelection.scss';

const FighterSelection = () => {
  const fighters = useRecoilValue(orderedFighters);

  return (
    <div className="FighterSelection">
      {
        chunk(fighters, 12).map(
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
