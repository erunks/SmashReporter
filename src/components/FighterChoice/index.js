import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { buttonize } from 'helpers/jsx-a11y-helper'
import { URLS } from 'lib/imageAssets';

import './FighterChoice.scss';

const FighterChoice = ({ leftFacing, fighter, onClick }) => (
    <Fragment>
      <div
        className={`FighterChoice vertical ${leftFacing ? 'faceLeft' : ''}` }
        style={{ backgroundImage: `url(${URLS.fighterThumbnail(fighter)})` }}
        alt={`fighter: ${fighter}`} { ...buttonize(onClick) }
      >
        <div className="helpText center-container">
          <p>Click to Select Fighter</p>
        </div>
      </div>
      <div
        className={`FighterChoice horizontal ${leftFacing ? 'faceLeft' : ''}`}
        style={{ backgroundImage: `url(${URLS.fighterThumbnailIcon(fighter)})` }}
        alt={`fighter: ${fighter}`} {...buttonize(onClick)}
      >
        <div className="helpText center-container">
          <p>Click to Select Fighter</p>
        </div>
      </div>
    </Fragment>
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
