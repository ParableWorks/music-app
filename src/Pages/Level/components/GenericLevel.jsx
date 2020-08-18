import React from 'react';
import PropTypes from 'prop-types';

import MIDILevel from './MIDILevel';
import QuestionResults from './QuestionResults';

const GenericLevel = (props) => {
  const { levelConfig } = props;
  const {
    levelConfig: { type },
  } = props;

  // const redNotes = ['g/4'];
  // const greenNotes = [];
  // const correct = false;

  const greenNotes = ['c/5'];
  const correct = true;
  const redNotes = [];

  switch (type) {
    case 'midi':
      return <MIDILevel levelconfig={levelConfig} />;
    case 'test':
      return (
        <QuestionResults
          correct={correct}
          redNotes={redNotes}
          greenNotes={greenNotes}
        />
      );
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
