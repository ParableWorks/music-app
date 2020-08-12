import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import NavBar from './NavBar';
import Homepage from '../Homepage/Homepage';

const useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
    // marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const FileNotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      {/* <NavBar /> */}
      <Button onClick={() => history.push('/')}>return to homepage</Button>
      <Button className={classes.root} onClick={() => history.goBack()}>
        go back
      </Button>
      <Homepage />
    </div>
  );
};

export default FileNotFound;
