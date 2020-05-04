import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import chunk from 'lodash/chunk';
import { getFighters } from '../../lib/api';
import FighterRow from '../../components/FighterRow/index.jsx';

import './FighterContainer.scss';

const FighterContainer = ({ initFighters = [{}] }) => {
  const [fighters, setFighters] = useState(initFighters);

  useEffect(() => {
    getFighters().then((fighters) => {
      setFighters(fighters);
    });
  }, [])

  const fightersPopulated = () => Object.getOwnPropertyNames(fighters[0]).length

  return (
    <div className="FighterContainer">
      {fightersPopulated() && chunk(fighters, 12).map((fighterChunk, index) => <FighterRow key={`fighterRow${index}`} fighterChunk={fighterChunk} />)}
    </div>
  )
};

const {
  arrayOf,
  object
} = propTypes;

FighterContainer.propTypes = {
  initFighters: arrayOf(object)
};

export default FighterContainer;
