import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedFightersState } from '../../recoils/fighter';
import { selectingPlayerState } from '../../recoils/player';
import FighterChoice from '../../components/FighterChoice';
import FighterSelection from '../../components/FighterSelection';
import './FighterContainer.scss';

const FighterContainer = () => {
  const selectedFighters = useRecoilValue(selectedFightersState);
  const setSelectingPlayer = useSetRecoilState(selectingPlayerState);

  return (
    <div className="FighterContainer">
      <FighterChoice
        leftFacing={true}
        fighter={selectedFighters[0]}
        onClick={() => setSelectingPlayer(0)}
      />
      <FighterSelection/>
      <FighterChoice
        fighter={selectedFighters[1]}
        onClick={() => setSelectingPlayer(1)}
      />
    </div>
  )
};

export default FighterContainer;
