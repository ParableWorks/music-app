import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const PlayButton = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Button onClick={() => setClicked(!clicked)}>
      {clicked ? <PlayArrowIcon /> : <PauseIcon />}
    </Button>
  );
};

export default PlayButton;
