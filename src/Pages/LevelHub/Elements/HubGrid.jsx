import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  card: {
    padding: theme.spacing(0),
    textAlign: 'center',
    height: '140px',
    color: theme.palette.text.secondary,
    backgroundColor: '#E8E9F3',
  },
}));

const HubGrid = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={8} className={classes.root}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cur) => (
        <Grid key={cur} item xs={6} sm={4} md={3} lg={2}>
          <CardActionArea>
            <Card className={classes.card}>
              <CardContent>
                <Typography align="left">
                  Level
                  {cur}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default HubGrid;
