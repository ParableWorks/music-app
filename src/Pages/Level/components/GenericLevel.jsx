import React from 'react';
import PropTypes from 'prop-types';

const GenericLevel = (props) => {
  const { levelConfig: { title } } = props;
  return (
    <div>
      <h1>
        level title:
        {' '}
        {title}
      </h1>
      <br />
      <a href="/levelhub">
        return to levelhub
      </a>
    </div>
  );
};

export default GenericLevel;

GenericLevel.propTypes = {
  levelConfig: PropTypes.shape({
    title: PropTypes.string,
  }),
};

GenericLevel.defaultProps = {
  levelConfig: {
    title: '',
  },
};
