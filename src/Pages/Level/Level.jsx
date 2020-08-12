import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';

import GenericLevel from './components/GenericLevel';
import levelConfig from '../../levelConfig.json';
import NavBar from '../UniversalComponents/NavBar';
import PlayButton from './components/PlayButton';

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
  button: { flexGrow: 0.03, color: '#221266' },
}));

const NowPlaying = (props) => {
  const { disabled } = props;
  const classes = useStyles();

  if (disabled === true) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        nowplaying is disabled
      </div>
    );
  }

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
              <br />
              <PlayButton className={classes.button} />
              <LinearProgress variant="determinate" value={69} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const Level = () => {
  const { levelNumber } = useParams();

  if (levelConfig.levels[levelNumber] === undefined) {
    return (
      <div>
        <h3>
          There is no level with number:
          {` '${levelNumber}' `}
        </h3>
        <br />
        <Link to="/levelhub">return to levelhub</Link>
      </div>
    );
  }
  return (
    <div>
      <NavBar levelTitle={`Level ${levelNumber}`} />
      <GenericLevel levelConfig={levelConfig.levels[levelNumber]} />
      <NowPlaying disabled={false} />
    </div>
  );
};

export default Level;
