import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import midiToNoteName from '../../../lib/midiToNoteName';
import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#E8E9F3',
  },
  playButton: {
    marginLeft: '0px',
  },
  NoteDisplay: {},
  BoxContent: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const randomizeNote = () => {
  function getRandomIntInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxCeil = Math.floor(max);
    return Math.floor(Math.random() * (maxCeil - minCeil + 1)) + minCeil;
  }
  return midiToNoteName(getRandomIntInclusive(60, 71)); // middle c to next octave
};

const InstructBox = (props) => {
  const classes = useStyles();
  const { insideContent } = props;
  // console.log({ insideContent });

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid>
          <Card className={classes.card}>
            <CardContent>
              <Typography align="center">Now Playing: </Typography>
              <div className={classes.BoxContent}>
                <PlayButton className={classes.PlayButton} />
                <NoteDisplay
                  className={classes.NoteDisplay}
                  note={randomizeNote()}
                />
                {insideContent}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default InstructBox;
