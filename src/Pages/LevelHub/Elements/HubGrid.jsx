import React from 'react';
import { useHistory } from "react-router-dom";
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

import levelConfig from '../../../levelConfig.json';

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
  const history = useHistory();

  return (
    <Grid container spacing={8} className={classes.root}>
      {Object.keys(levelConfig.levels).map((cur) => (
        <Grid key={cur} item xs={6} sm={4} md={3} lg={2}>
          <CardActionArea onClick={() => history.push(`/level/${cur}`)}>
            <Card className={classes.card}>
              <CardContent>
                <Typography align="left">
                  Level
                  {' '}
                  {cur}
                  :
                  <br />
                  {levelConfig.levels[cur].title}
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
