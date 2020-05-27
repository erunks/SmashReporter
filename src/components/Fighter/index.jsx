import React from 'react';
import propTypes from 'prop-types';
import { buttonize } from '../../helpers/jsx-a11y-helper'
import { URLS } from '../../lib/imageAssets';

import './Fighter.scss';

const Fighter = (props) => {
  const fighterAssetName = (name) => {
    let assetName = name.replace(/[- ]/g, '_');
    assetName = assetName.replace(/&/g, 'and');
    assetName = assetName.replace(/\./g, '');
    return assetName.toLowerCase();
  };

  const asset_name = props.asset_name || fighterAssetName(props.name);
  const fighter_thumbnail_icon = props.asset_url || URLS.fighterThumbnailIcon(asset_name);
  const setFighter = () => {
    props.setPlayerFighter(asset_name);
  };

  return (
    <div className="fighter" { ...buttonize(() => setFighter()) }>
      <div className="fighterCard" style={{ backgroundImage: `url(${fighter_thumbnail_icon})` }} alt={`fighter: ${props.name}`}>
        <div className={`selection ${props.selectingPlayer === 0 ? 'player-one' : 'player-two'}`}>
          <div className="topLeft"></div>
          <div className="bottomRight"></div>
        </div>
      </div>
    </div>
  );
};

const {
  bool,
  func,
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
  name: string.isRequired,
  selectingPlayer: number.isRequired,
  setPlayerFighter: func.isRequired
};

export default Fighter;
