import React from 'react';
import { useParams } from 'react-router-dom';

const Level = () => {
  const { levelNumber } = useParams();
  return (
    <div>
      Level.jsx
      <br />
      current level is
      {' '}
      {levelNumber}
    </div>
  );
};

export default Level;
