import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import { selectedStageState } from 'recoils/stage';
import { buttonize } from 'helpers/jsx-a11y-helper'
import { IKImage } from 'imagekitio-react';
import { URLS } from 'lib/imageAssets';

import './Stage.scss';

const Stage = (props) => {
  const {
    dlc,
    displayName,
    id,
    name
  } = props;

  const [selectedStage, setSelectedStage] = useRecoilState(selectedStageState);
  const [clickPostion, setClickPosition] = useState({ x: 50, y: 27 });
  const ref = useRef(null);

  const renderStageName = () => (
    <div className="namePlate">
      <div className="name">{ name }</div>
    </div>
  );

  const isStageSelected = () => id === selectedStage;
  const onClick = (event) => {
    setSelectedStage(id);
    const { left, top } = ref.current.getBoundingClientRect();
    setClickPosition({
      x: Math.abs(left - event.clientX),
      y: Math.abs(top - event.clientY)
    });
  };

  return (
    <div ref={ref} className={`stage ${isStageSelected() ? 'selected' : ''}`} { ...buttonize(onClick) }>
      <div className="stageCard">
        <IKImage
          src={URLS.stage(id, dlc)}
          alt={`stage: ${name}`}
          loading="lazy"
          lqip={{ active: true }}
        />
        { displayName && renderStageName() }
        { isStageSelected() && <div className="selectedStageToken">
          <IKImage
            path={'/assets/stage_coin.png'}
            alt="Stage select token"
            loading="lazy"
            lqip={{ active: true }}
            style={{
              position: 'relative',
              top: `${clickPostion.y}px`,
              left: `${clickPostion.x}px`,
            }}
          />
        </div> }
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

Stage.propTypes = {
  dlc: oneOfType([
    bool,
    number
  ]).isRequired,
  displayName: bool,
  id: number.isRequired,
  name: string.isRequired
};

Stage.defaultProps = {
  displayName: false
};

export default Stage;
