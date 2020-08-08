import React from 'react';
import PropTypes from 'prop-types';

const MusicTheoryLevel = (props) => {
  const { levelConfig: { title } } = props;
  return (
    <h1>
      level title:
      {' '}
      {title}
    </h1>
  );
};

export default MusicTheoryLevel;

MusicTheoryLevel.propTypes = {
  levelConfig: PropTypes.shape({
    title: PropTypes.string,
  }),
};

MusicTheoryLevel.defaultProps = {
  levelConfig: {
    title: '',
  },
};
