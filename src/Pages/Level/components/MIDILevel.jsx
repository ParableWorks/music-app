import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import OnScreenKeyboard from './OnScreenKeyboard';
import SheetMusic from './SheetMusic';
import InstructBox from './InstructBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // height: '140px',
    backgroundColor: '#E8E9F3',
  },
  button: { flexGrow: 0.03, color: '#221266' },
  keyboard: {
    position: 'fixed',
    alignItems: 'flex-end',
  },
  pianoBox: {
    marginLeft: '220px',
    marginTop: '125px',
    width: '6390px',
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

  return (
    <div>
      <InstructBox />
      <Grid container spacing={8} className={classes.pianoBox}>
        <Grid xs={1} sm={4} md={3} lg={2}>
          <Card className={classes.card}>
            <CardContent>
              <OnScreenKeyboard className={classes.keyboard} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MIDILevel;
