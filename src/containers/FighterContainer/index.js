import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedFightersState } from '../../recoils/fighter';
import { selectingPlayerState } from '../../recoils/player';
import MainLayout from '../MainLayout';
import FighterChoice from '../../components/FighterChoice';
import FighterSelection from '../../components/FighterSelection';
import './FighterContainer.scss';

const FighterContainer = () => {
  const selectedFighters = useRecoilValue(selectedFightersState);
  const setSelectingPlayer = useSetRecoilState(selectingPlayerState);

  return (
    <MainLayout>
      <div className="center-container">
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
      </div>
    </MainLayout>
  )
};

export default FighterContainer;
