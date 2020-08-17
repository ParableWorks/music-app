import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: { flexGrow: 0.03, color: '#221266' },
}));

const PlayButton = (props) => {
  const { onPlay, onPause, loading } = props;

  const [playing, setPlaying] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
  }, [playing, onPlay, onPause]);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <Button className={classes.button} onClick={() => setPlaying(!playing)}>
      {playing ? (
        <PauseIcon fontSize="large" />
      ) : (
        <PlayArrowIcon fontSize="large" />
      )}
    </Button>
  );
};

export default PlayButton;

PlayButton.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  loading: PropTypes.bool,
};

PlayButton.defaultProps = {
  onPlay: () => {},
  onPause: () => {},
  loading: false,
};
