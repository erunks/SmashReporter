import React from 'react';
import propTypes from 'prop-types';
import Fighter from 'components/Fighter';

import './FighterRow.scss';

const FighterRow = ({ fighterChunk }) => (
    <div className="fighterRow">
      {
        fighterChunk && fighterChunk.map((fighterData) => <Fighter
            key={fighterData.id}
            {...fighterData}
          />)
      }
    </div>
);

const {
  arrayOf,
  object
} = propTypes;

FighterRow.propTypes = {
  fighterChunk: arrayOf(object).isRequired
};

export default FighterRow;
