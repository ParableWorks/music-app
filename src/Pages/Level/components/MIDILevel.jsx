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

  return (
    <div>
      <InstructBox noteSequence={notes} onKeyPress={onKeyPress} />
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

MIDILevel.propTypes = {
  levelNumber: PropTypes.number,
};

MIDILevel.defaultProps = {
  levelNumber: 1,
};

export default MIDILevel;
