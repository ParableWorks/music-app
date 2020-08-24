import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import SettingsIcon from '@material-ui/icons/Settings';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Popover from '@material-ui/core/Popover';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
    flexGrow: 0.75,
    color: '#221266',
    fontFamily: 'Roboto',
    fontSize: '25px',
  },
  avatar: {
    fontSize: '80px',
    width: '70px',
    height: '50px',
  },
  homeIcon: {
    flexGrow: 0.03,
    color: '#221266',
  },
  drawerHeaderTopMargin: {
    ...theme.mixins.toolbar,
  },
  volumeBox: {
    backgroundColor: '#E8E9F3',
  },
  slider: {
    width: '100px',
  },
}));
const getVolume = () => {
  return { value } / 100;
};

const NavBar = ({ levelTitle, disableHub }) => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(100);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [settings, setSettings] = React.useState(false);

  const handleVolumeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleVolumeClose = () => {
    setAnchorEl(null);
  };

  const handleVolumeChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (status) => {
    setSettings(status);
    // settings.setState(status);
  };
  console.log({ settings });

  return (
    <div className={classes.root}>
      <AppBar
        sizes="large"
        style={{ background: '#aa90d7' }}
        position="relative"
      >
        <Toolbar>
          <Button alt="Go Home">
            <Avatar
              className={classes.avatar}
              alt="Go Home"
              src="https://cdn.discordapp.com/attachments/616872404546879517/738873203837108244/profile.png" // TODO: change this to our own hosting
              onClick={() => history.push('/')}
            />
          </Button>
          <Button
            onClick={() => history.push('/levelhub')}
            variant="contained"
            disabled={disableHub}
          >
            Level Hub
          </Button>
          <Typography align="center" className={classes.title}>
            {levelTitle}
          </Typography>

          <Button aria-describedby={id} onClick={handleVolumeClick}>
            <VolumeUpIcon fontSize="large" />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleVolumeClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box px={2} pt={0.6} pb={0.4} className={classes.volumeBox}>
              <Slider
                value={value}
                onChange={handleVolumeChange}
                aria-labelledby="continuous-slider"
                className={classes.slider}
              />
            </Box>
          </Popover>

          <Button onClick={() => toggleDrawer(true)} align="right">
            <SettingsIcon fontSize="large" />
          </Button>

          <Drawer
            anchor="right"
            open={settings}
            onClose={() => toggleDrawer(false)}
          >
            <div
              role="presentation"
              onClick={() => toggleDrawer(true)}
              onKeyDown={() => toggleDrawer(true)}
            >
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        <VolumeDown />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <VolumeDown />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Toolbar>

        {/* <Button
          variant="contained"
        >
          Message:  potential error message place
        </Button> */}
      </AppBar>
      <div />
    </div>
  );
};

export default NavBar;
