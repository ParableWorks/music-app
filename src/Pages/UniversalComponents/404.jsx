import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Homepage from '../Homepage/Homepage';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ff4336',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const FileNotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Typography className={classes.root}>
        Error 404: Page was not found!
        {/* sorey uwu code munkeys are on it */}
        <Button onClick={() => history.push('/')}>return to homepage</Button>
        <Button onClick={() => history.goBack()}>go back</Button>
      </Typography>

      <Homepage />
    </div>
  );
};

export default FileNotFound;
