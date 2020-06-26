import React from 'react';
import propTypes from 'prop-types';
import { URLS } from '../../lib/imageAssets';

import './Stage.scss';

const Stage = (props) => (
    <div className="stage">
      <div className="stageCard">
        <img src={URLS.stage(props.id, props.dlc)} alt={`stage: ${props.name}`} />
        <div className="namePlate">
          <div className="name">{props.name}</div>
        </div>
      </div>
    </div>
);

const {
  bool,
  number,
  oneOfType,
  string
} = propTypes;

Stage.propTypes = {
  dlc: oneOfType([
    bool,
    number
  ]).isRequired,
  id: number.isRequired,
  name: string.isRequired
};

export default Stage;
