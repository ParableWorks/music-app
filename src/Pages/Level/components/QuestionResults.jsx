import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import SheetMusic from './SheetMusic';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#E8E9F3',
  },
  BoxContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  correct: {
    display: 'inline-block',
    fontSize: '50px',
    color: '#43a047',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incorrect: {
    display: 'inline-block',
    fontSize: '50px',
    color: '#D32222',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
const QuestionResults = (props) => {
  const classes = useStyles();
  const { correct, redNotes, greenNotes, blackNotes } = props;

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6} s lg={2} zeroMinWidth>
          <Card className={classes.card}>
            <CardContent>
              {correct ? (
                <Typography align="center" className={classes.correct}>
                  Correct!
                </Typography>
              ) : (
                <Typography align="center" className={classes.incorrect}>
                  Incorrect!
                </Typography>
              )}
              <SheetMusic
                notes={blackNotes}
                redNotes={redNotes}
                greenNotes={greenNotes}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionResults;

QuestionResults.propTypes = {
  correct: PropTypes.bool.isRequired,
  redNotes: PropTypes.string,
  greenNotes: PropTypes.string,
  blackNotes: PropTypes.string,
};

QuestionResults.defaultProps = {
  redNotes: '',
  greenNotes: '',
  blackNotes: '',
};
