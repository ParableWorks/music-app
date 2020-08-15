import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nowplaying: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#3f50b5',
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // height: '140px',
    backgroundColor: '#E8E9F3',
  },
  playButton: {
    marginLeft: '-120px',
    display: 'inline-block',
    alignItems: 'baseline',
  },
  NoteDisplay: {
    marginLeft: '40px',
    display: 'inline-block',
    paddingTop: '5px',
  },
}));

const InstructBox = (props) => {
  const classes = useStyles();
  const { insideContent } = props;

  return (
    <div>
      <Grid
        container
        spacing={8}
        className={(classes.nowplaying, classes.root)}
      >
        <Grid xs={1} sm={4} md={3} lg={2}>
          <Card className={classes.card}>
            <CardContent>
              <Typography align="center">Now Playing: </Typography>
              <div>
                <PlayButton className={classes.playButton} />
                <NoteDisplay className={classes.NoteDisplay} />
                {insideContent}
                {/* TODO: fix so that instructbox can display any prop given
                component */}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default InstructBox;