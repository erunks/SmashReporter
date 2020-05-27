import React from 'react';
import propTypes from 'prop-types';
import Fighter from '../Fighter/index.jsx';

import './FighterRow.scss';

const FighterRow = ({ fighterChunk, ...passThroughProps }) => (
    <div className="fighterRow">
      {
        fighterChunk && fighterChunk.map((fighterData) => <Fighter
            key={fighterData.id}
            {...fighterData}
            {...passThroughProps}
          />)
      }
    </div>
);

const {
  arrayOf,
  func,
  number,
  object
} = propTypes;

FighterRow.propTypes = {
  fighterChunk: arrayOf(object).isRequired,
  selectingPlayer: number.isRequired,
  setPlayerFighter: func.isRequired
};

export default FighterRow;
