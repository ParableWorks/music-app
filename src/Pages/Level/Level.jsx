import React from 'react';
import { useParams } from 'react-router-dom';

import GenericLevel from './components/GenericLevel';
import levelConfig from '../../levelConfig.json';

const Level = () => {
  const { levelNumber } = useParams();

  if (levelConfig.levels[levelNumber] === undefined) {
    return (
      <h3>
        There is no level with numer:
        {` '${levelNumber}' `}
      </h3>
    );
  }
  return (
    <GenericLevel levelConfig={levelConfig.levels[levelNumber]} />
  );
};

export default Level;
