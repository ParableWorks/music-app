import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import NavBar from '../UniversalComponents/NavBar';

const useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
    // marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
    backgroundColor: 'pink',
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <p>
        <Link to="/levelhub">levelhub</Link>
        <br />
        <br />
        <Link to="/">home page</Link>
        <h1>
          <a href="https://github.com/ParableWorks/music-app">Find the source code here!</a>
        </h1>
      </p>
    </div>
  );
};

export default Homepage;
