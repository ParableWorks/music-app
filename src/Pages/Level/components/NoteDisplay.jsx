import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  note: {
    display: 'inline-block',
    fontSize: '50px',
    color: '#43a047',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const randomizeNote = () => {
  const note = Math.floor(Math.random() * 12);
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

const NoteDisplay = (props) => {
  const classes = useStyles();
  const { input } = props;
  let note;

  if (note === undefined) {
    note = randomizeNote();
  } else {
    note = input;
  }

  return <Typography className={classes.note}>{note}</Typography>;
};

export default NoteDisplay;