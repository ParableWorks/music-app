import React from 'react';
import PropTypes from 'prop-types';

import MIDILevel from './MIDILevel';
import QuestionRestults from './QuestionResults';

const GenericLevel = (props) => {
  const { levelConfig } = props;
  const {
    levelConfig: { type },
  } = props;

  switch (type) {
    case 'midi':
      return <MIDILevel levelconfig={levelConfig} />;
    case 'test':
      return <QuestionRestults correct />;
    default:
      return (
        <div>
          <h1>
            There is no level of type
            {` ${type}`}
          </h1>
        </div>
      );
  }
};

export default GenericLevel;

GenericLevel.propTypes = {
  levelConfig: PropTypes.shape({
    type: PropTypes.string,
  }),
};

GenericLevel.defaultProps = {
  levelConfig: {
    type: '',
  },
};
