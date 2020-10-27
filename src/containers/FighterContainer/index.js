import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { fighterState, selectedFightersState } from 'recoils/fighter';
import { selectingPlayerState } from 'recoils/player';
import FighterChoice from 'components/FighterChoice';
import FighterSelection from 'components/FighterSelection';
import MainLayout from 'containers/MainLayout';
import { getFighters } from 'lib/api';

import './FighterContainer.scss';

const FighterContainer = () => {
  const selectedFighters = useRecoilValue(selectedFightersState);
  const [fighters, setFighters] = useRecoilState(fighterState);
  const setSelectingPlayer = useSetRecoilState(selectingPlayerState);

  const fightersPopulated = () => Object.getOwnPropertyNames(fighters[0]).length

  useEffect(() => {
    getFighters().then((fighters) => {
      setFighters(fighters);
    })
  }, [setFighters]);

  return (
    <MainLayout>
      <div className="center-container">
        { fightersPopulated() && <div className="FighterContainer">
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
        </div>}
      </div>
    </MainLayout>
  )
};

export default FighterContainer;
