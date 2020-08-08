import React from 'react';
import PropTypes from 'prop-types';

const EarTrainingLevel = (props) => {
  const { levelConfig: { title } } = props;
  return (
    <h1>
      level title:
      {' '}
      {title}
    </h1>
  );
};

export default EarTrainingLevel;

EarTrainingLevel.propTypes = {
  levelConfig: PropTypes.shape({
    title: PropTypes.string,
  }),
};

EarTrainingLevel.defaultProps = {
  levelConfig: {
    title: '',
  },
};
