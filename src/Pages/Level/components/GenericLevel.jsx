import React from "react";
import PropTypes from "prop-types";

const GenericLevel = (props) => {
  const {
    levelConfig: { title },
  } = props;
  return <div>yo</div>;
};

export default GenericLevel;

GenericLevel.propTypes = {
  levelConfig: PropTypes.shape({
    title: PropTypes.string,
  }),
};

GenericLevel.defaultProps = {
  levelConfig: {
    title: "",
  },
};
