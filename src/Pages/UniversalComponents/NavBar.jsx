import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import { red, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    color: purple,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    color: '#221266',
    fontFamily: 'Roboto',
    fontSize: '25px',
  },
  avatar: {
    fontSize: '80px',
    width: '70px',
    height: '50px',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        sizes="large"
        style={{ background: '#aa90d7' }}
        position="fixed"
      >
        <Toolbar>
          <Avatar
            className={classes.avatar}
            alt="Parable Works Logo"
            src="https://cdn.discordapp.com/attachments/616872404546879517/738873203837108244/profile.png"
          />
          <Typography align="center" className={classes.title}>
            Level Hub
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
