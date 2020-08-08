import React from 'react';
import { useParams } from 'react-router-dom';

import GenericLevel from './components/GenericLevel';
import levelConfig from '../../levelConfig.json';

const Level = () => {
  const { levelNumber } = useParams();

  if (levelConfig.levels[levelNumber] === undefined) {
    return (
      <div>
        <h3>
          There is no level with number:
          {` '${levelNumber}' `}
        </h3>
        <br />
        <a href="/levelhub">
          return to levelhub
        </a>
      </div>
    );
  }
  return (
    <GenericLevel levelConfig={levelConfig.levels[levelNumber]} />
  );
};

export default Level;
