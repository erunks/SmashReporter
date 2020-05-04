import React from 'react';
import propTypes from 'prop-types';
import { URLS } from '../../lib/imageAssets';

import './Fighter.scss';

const Fighter = (props) => {
  const fighterAssetName = (name) => {
    let assetName = name.replace(/[- ]/g, '_');
    assetName = assetName.replace(/&/g, 'and');
    assetName = assetName.replace(/\./g, '');
    return assetName.toLowerCase();
  };

  return (
    <div className="fighter">
      <div className="fighterCard">
        <img src={URLS.fighterThumbnailIcon(fighterAssetName(props.name))} alt={`fighter: ${props.name}`} />
        <div className="selection">
          <div className="topLeft"></div>
          <div className="bottomRight"></div>
        </div>
      </div>
    </div>
  );
};

const {
  bool,
  number,
  oneOfType,
  string
} = propTypes;

Fighter.propTypes = {
  dlc: oneOfType([
    bool,
    number
  ]).isRequired,
  id: number.isRequired,
  name: string.isRequired
};

export default Fighter;
