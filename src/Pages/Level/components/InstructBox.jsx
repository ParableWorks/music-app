import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  return getRandomIntInclusive(60, 71); // middle c to next octave
};

const InstructBox = (props) => {
  const classes = useStyles();
  const { insideContent } = props;
  // console.log({ insideContent });
  const [note, setNote] = useState(randomizeNote());
  // const [playingNote, setPlayingNote] = useState();
  const instrument = useSelector((state) => state.soundPlayer.instrument);
  let playingNote;

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid>
          <Card className={classes.card}>
            <CardContent>
              <Typography align="center">Now Playing: </Typography>
              <div className={classes.BoxContent}>
                <PlayButton
                  className={classes.PlayButton}
                  onPlay={() => {
                    // really not a fan of magic numbers because this isnt
                    // going to scale well to long passages but it works for
                    // single notes
                    // TODO: make this work with multiple notes
                    const duration = 1;
                    playingNote = instrument.play(note, 0, { duration });
                    return duration;
                  }}
                  onPause={() => {
                    if (playingNote) {
                      // console.log('stopNote called', playingNote);
                      playingNote.stop();
                    }
                  }}
                  loading={instrument === undefined}
                />
                <NoteDisplay
                  className={classes.NoteDisplay}
                  note={midiToNoteName(note)}
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
