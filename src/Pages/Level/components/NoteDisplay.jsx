import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  note: {
    display: 'inline-block',
    fontSize: '50px',
    color: '#43a047',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const NoteDisplay = (props) => {
  const classes = useStyles();
  const { note } = props;
  // let note;

  // if (note === undefined) {
  //   note = randomizeNote();
  // } else {
  // note = input;
  // }

  return <Typography className={classes.note}>{note}</Typography>;
};

export default NoteDisplay;

NoteDisplay.propTypes = {
  note: PropTypes.string,
};

NoteDisplay.defaultProps = {
  note: '',
};
