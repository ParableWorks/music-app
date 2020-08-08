import React from 'react';
import { useParams } from 'react-router-dom';

import EarTrainingLevel from './components/EarTrainingLevel';
import MusicTheoryLevel from './components/MusicTheoryLevel';
import levelConfig from '../../levelConfig.json';

const Level = () => {
  const { levelNumber, levelType } = useParams();

  switch (levelType.toLowerCase()) {
    case 'musictheory':
      if (levelConfig.musicTheory.levels[levelNumber] === undefined) {
        return (
          <h3>
            music theory does not have a level number
            {` '${levelNumber}' `}
          </h3>
        );
      }
      return (
        <MusicTheoryLevel levelConfig={levelConfig.musicTheory.levels[levelNumber]} />
      );
    case 'eartraining':
      if (levelConfig.earTraining.levels[levelNumber] === undefined) {
        return (
          <h3>
            ear training does not have a level number
            {` '${levelNumber}' `}
          </h3>
        );
      }
      return (
        <EarTrainingLevel levelConfig={levelConfig.earTraining.levels[levelNumber]} />
      );
    default:
      return (
        <h3>
          The level of type
          {` '${levelType}' `}
          does not exist
        </h3>
      );
  }
};

export default Level;
