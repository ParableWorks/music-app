import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: { flexGrow: 0.03, color: '#221266' },
}));

const PlayButton = () => {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  return (
    <Button className={classes.button} onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <PlayArrowIcon fontSize="large" />
      ) : (
        <PauseIcon fontSize="large" />
      )}
    </Button>
  );
};

export default PlayButton;
