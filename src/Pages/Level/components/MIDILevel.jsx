import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import OnScreenKeyboard from './OnScreenKeyboard';
import SheetMusic from './SheetMusic';
import InstructBox from './InstructBox';

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

const MIDILevel = () => {
  const [redNotes, setRedNotes] = useState([]);
  const [greenNotes, setGreenNotes] = useState([]);
  const classes = useStyles();

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
      <InstructBox insideContent={content} />
      <div className={classes.Piano}>
        <OnScreenKeyboard />
      </div>
    </div>
  );
};

export default MIDILevel;
