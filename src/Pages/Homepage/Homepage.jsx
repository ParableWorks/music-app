import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
    // marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    backgroundColor: 'pink',
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>
        pip
        <br />
      </p>
      poop
    </div>
  );
};

export default Homepage;
