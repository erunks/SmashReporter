import React, { useState } from 'react';
import FighterChoice from '../../components/FighterChoice/index.jsx';
import FighterSelection from '../../components/FighterSelection/index.jsx';
import './FighterContainer.scss';

const FighterContainer = () => {
  const [playerOneFighter, setplayerOneFighter] = useState('mario');
  const [playerTwoFighter, setplayerTwoFighter] = useState('mario');
  const [selectingPlayer, setSelectingPlayer] = useState(0);


  const setPlayerFighter = (name) => {
    if (selectingPlayer === 0) {
      setplayerOneFighter(name);
    } else if (selectingPlayer === 1) {
      setplayerTwoFighter(name);
    }
  };

  return (
    <div className="FighterContainer">
      <FighterChoice
        leftFacing={true}
        fighter={playerOneFighter}
        onClick={() => setSelectingPlayer(0)}
      />
      <FighterSelection
        setPlayerFighter={setPlayerFighter}
        selectingPlayer={selectingPlayer}
      />
      <FighterChoice
        fighter={playerTwoFighter}
        onClick={() => setSelectingPlayer(1)}
      />
    </div>
  )
};

export default FighterContainer;
