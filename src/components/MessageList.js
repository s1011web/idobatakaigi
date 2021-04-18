import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    girdRow: 1,
  },
});

export const MessageList = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageList</div>;
};
