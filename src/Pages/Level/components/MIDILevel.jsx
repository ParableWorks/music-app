import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import OnScreenKeyboard from './OnScreenKeyboard';
import SheetMusic from './SheetMusic';
import InstructBox from './InstructBox';
import getNoteSequence from '../../../lib/midi';

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
  const [notes, setNotes] = useState([]);

  const { levelNumber } = props;

  useEffect(() => {
    setNotes(noteSequence);
    console.log('notes: ', notes);
  }, [noteSequence]);

  const classes = useStyles();

  let correctNote;

  const onKeyPress = (note) => {
    correctNote = note;
  };

  const grade = (level) => {
    switch (level) {
      case 1:
        if (notes[0] % 12 === correctNote) {
          console.log('correct!');
        } else {
          console.log('incorrect');
        }
        break;
      default:
        console.log('that level does not exist');
    }
  };

  useEffect(() => {
    if (notes.length > 0) {
      switch (levelNumber) {
        case '1':
          grade(1);
          break;
        default:
          console.log('that level does not exist');
      }
    }
  }, [notes]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (redNotes.length === 0) {
        setRedNotes(['c/4', 'c/5']);
      } else {
        setRedNotes([]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [redNotes]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (greenNotes.length === 0) {
        setGreenNotes(['c/4', 'f/5']);
      } else {
        setGreenNotes([]);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [greenNotes]);

  const content = (
    <SheetMusic
      notes={['c/4', 'e/4', 'g/4']}
      redNotes={redNotes}
      greenNotes={greenNotes}
    />
  );

  return (
    <div>
      {/* <InstructBox insideContent={content} /> */}
      <InstructBox noteSequence={notes} onKeyPress={onKeyPress} />
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
