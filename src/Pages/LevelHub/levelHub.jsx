import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import NavBar from '../UniversalComponents/NavBar';
import HubGrid from './Elements/HubGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
  },
  paper: {
    height: 140,
    width: 100,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  control: {
    padding: theme.spacing(2),
  },
  icon: {
    backgroundColor:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    color: 'primary',
  },
  checkedIcon: {
    backgroundColor:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    color: 'primary',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function LevelHub() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Grid item container>
        <Grid item xs={2} lg={1} />
        <Grid item xs={8} lg={10}>
          <HubGrid />
        </Grid>
        <Grid item xs={2} lg={1} />
      </Grid>
    </ThemeProvider>
  );
}
