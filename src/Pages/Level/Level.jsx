import React from 'react';
import { useParams, Link } from 'react-router-dom';

import GenericLevel from './components/GenericLevel';
import levelConfig from '../../levelConfig.json';
import NavBar from '../UniversalComponents/NavBar';

const Level = () => {
  const { levelNumber } = useParams();

  if (levelConfig.levels[levelNumber] === undefined) {
    return (
      <div>
        <NavBar />
        <h3>
          There is no level with number:
          {` '${levelNumber}' `}
        </h3>
        <br />
        <Link to="/levelhub">return to levelhub</Link>
      </div>
    );
  }
  return (
    <div>
      <NavBar levelTitle={`Level ${levelNumber}`} />
      <GenericLevel
        levelConfig={levelConfig.levels[levelNumber]}
        levelNumber={Number(levelNumber)}
      />
    </div>
  );
};

export default Level;
