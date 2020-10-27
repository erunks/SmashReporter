import React from 'react';
import propTypes from 'prop-types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedFightersState } from 'recoils/fighter';
import { selectingPlayerState } from 'recoils/player';
import { buttonize } from 'helpers/jsx-a11y-helper'
import { IKImage } from 'imagekitio-react';
import { URLS } from 'lib/imageAssets';

import './Fighter.scss';

const Fighter = (props) => {
  const [selectedFighters, setSelectedFighters] = useRecoilState(selectedFightersState);
  const selectingPlayer = useRecoilValue(selectingPlayerState);

  const fighterAssetName = (name) => {
    let assetName = name.replace(/[- ]/g, '_');
    assetName = assetName.replace(/&/g, 'and');
    assetName = assetName.replace(/\./g, '');
    return assetName.toLowerCase();
  };

  const setFighter = () => {
    const newSelectedFighters = [...selectedFighters];
    newSelectedFighters[selectingPlayer] = asset_name;
    setSelectedFighters(newSelectedFighters);
  };

  const asset_name = props.asset_name || fighterAssetName(props.name);
  const fighter_thumbnail_icon = props.asset_url || URLS.fighterThumbnailIcon(asset_name);

  return (
    <div className="fighter" { ...buttonize(() => setFighter()) }>
      <div className="fighterCard" alt={`fighter: ${props.name}`}>
        <IKImage
          src={fighter_thumbnail_icon}
          alt={`fighter: ${props.name}`}
          loading="lazy"
          lqip={{ active: true }}
        />
        <div className={`selection ${selectingPlayer === 0 ? 'player-one' : 'player-two'}`}>
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
