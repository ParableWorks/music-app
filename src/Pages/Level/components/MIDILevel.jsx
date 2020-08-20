import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import OnScreenKeyboard from './OnScreenKeyboard';
import SheetMusic from './SheetMusic';
import InstructBox from './InstructBox';
import getNoteSequence from '../../../lib/midi';
import QuestionResults from './QuestionResults';

const useStyles = makeStyles(() => ({
  Piano: {
    width: '100%',
    height: '25%',
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
  },
}));

const noteSequence = getNoteSequence();

const MIDILevel = (props) => {
  const [redNotes, setRedNotes] = useState([]);
  const [greenNotes, setGreenNotes] = useState([]);
  const [correctNote, setCorrectNote] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const { levelNumber } = props;

  const classes = useStyles();

  const randomizeNote = () => {
    return Math.floor(Math.random() * 12);
  };

  useEffect(() => {
    setCorrectNote(randomizeNote());
  }, []);

  // plays note when level starts
  const duration = 1;
  const instrument = useSelector((state) => state.soundPlayer.instrument);
  if (instrument !== undefined) {
    instrument.play(correctNote, 0, { duration });
  }

  const grade = (level) => {
    switch (level) {
      case 1:
        if (noteSequence[0] % 12 === correctNote) {
          console.log('correct');
          setShowResults(true);
        } else {
          console.log('incorrect');
        }
        break;
      default:
        console.log('that level does not exist');
    }
  };

  // when condition is met, proceeds to grade
  if (noteSequence.length > 0) {
    // console.log(`${noteSequence} ${correctNote} ${noteSequence.length}`);
    switch (levelNumber) {
      case 1:
        console.log('Proceeded to grade')
        grade(1);
        break;
      default:
        console.log('that level does not exist');
    }
  }

  const content = (
    <SheetMusic
      notes={['c/4', 'e/4', 'g/4']}
      redNotes={redNotes}
      greenNotes={greenNotes}
    />
  );

  if (showResults === true) {
    return (
      <QuestionResults
        correct={correctNote}
        redNotes={redNotes}
        greenNotes={greenNotes}
      />
    );
  }
  return (
    <div>
      <InstructBox noteSequence={noteSequence} correctNote={correctNote} />
      <div className={classes.Piano}>
        <OnScreenKeyboard />
      </div>
    </div>
  );
};

MIDILevel.propTypes = {
  levelNumber: PropTypes.number,
};

MIDILevel.defaultProps = {
  levelNumber: 1,
};

export default MIDILevel;
