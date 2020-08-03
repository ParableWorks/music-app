import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import NavBar from '../UniversalComponents/NavBar';
import clsx from 'clsx';

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
      <Grid
        container
        classes={{
          root: classes.root,
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
              <Grid key={value} item>
                <Paper
                  classes={{
                    root: classes.paper,
                  }}
                >
                  hello this is
                  {value}
                  <Checkbox
                    className={classes.icon}
                    checkedIcon={<span className={classes.checkedIcon} />}

                    // checkedIcon={
                    //   <span
                    //     className={clsx(classes.icon, classes.checkedIcon)}
                    //   />
                    // }
                    // icon={<span className={classes.icon} />}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
