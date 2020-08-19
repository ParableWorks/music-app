import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import playNote from '../../../lib/soundPlayer/soundPlayer';

const useStyles = makeStyles(() => ({
  note: {
    display: 'inline-block',
    fontSize: '50px',
    color: '#43a047',
    justifyContent: 'center',
    alignItems: 'center',
  },
  correct: {
    display: 'inline-block',
    fontSize: '50px',
    color: '#76ff03',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incorrect: {
    display: 'inline-block',
    fontSize: '50px',
    color: '#F00',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const convertToNoteName = (note) => {
  switch (note) {
    case 0:
      return 'C';
    case 1:
      return 'C#';
    case 2:
      return 'D';
    case 3:
      return 'Eb';
    case 4:
      return 'E';
    case 5:
      return 'F';
    case 6:
      return 'F#';
    case 7:
      return 'G';
    case 8:
      return 'G#';
    case 9:
      return 'A';
    case 10:
      return 'Bb';
    case 11:
      return 'B';
    default:
      return 'something went wrong';
  }
};

const randomizeNote = () => {
  return Math.floor(Math.random() * 12);
};

let correctNote;

const NoteDisplay = (props) => {
  const classes = useStyles();
  const { note } = props;
  // let note;

  // if (note === undefined) {
  //   note = randomizeNote();
  // } else {
  // note = input;
  // }
  // console.log('NOTE SEQUENCE: ', props.noteSequence);

  useEffect(() => {
    correctNote = randomizeNote();
    playNote(correctNote + 60);
    props.onKeyPress(correctNote);
    correctNote = convertToNoteName(correctNote);
  }, []);

  // if (props.noteSequence.length > 1) {
  //   console.log(`note sequence2:${props.noteSequence}`);
  //   if (props.noteSequence[0] % 60 === note) {
  //     return <Typography className={classes.correct}>Correct!</Typography>;
  //   }
  //   return <Typography className={classes.incorrect}>Incorrect</Typography>;
  // }

  return <Typography className={classes.note}>{correctNote}</Typography>;
};

// playNote(note);

export default NoteDisplay;

NoteDisplay.propTypes = {
  note: PropTypes.string,
};

NoteDisplay.defaultProps = {
  note: '',
};
