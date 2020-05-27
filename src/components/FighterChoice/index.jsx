import React from 'react';
import propTypes from 'prop-types';
import { buttonize } from '../../helpers/jsx-a11y-helper'
import { URLS } from '../../lib/imageAssets';

import './FighterChoice.scss';

const FighterChoice = ({ leftFacing, fighter, onClick }) => (
    <div className={`FighterChoice ${leftFacing ? 'faceLeft' : ''}` } { ...buttonize(onClick) }>
    <img src={URLS.fighterThumbnail(fighter)} alt={`fighter: ${fighter}`} />
      <div className="helpText">
        <p>Click to Select Fighter</p>
      </div>
    </div>
);

const {
  bool,
  func,
  string
} = propTypes;

FighterChoice.propTypes = {
  leftFacing: bool,
  fighter: string.isRequired,
  onClick: func.isRequired
};

export default FighterChoice;
