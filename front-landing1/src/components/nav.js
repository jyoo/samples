import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  nav: {
    padding: "30px 15px",
    background: "transparent !important",
    fontSize: "100%"
  }
  // container: {
  //   minHeight: "75vh",
  //   display: "flex",
  //   width: "100%",
  //   textAlign: "center"
  // }
}));

function Nav(props) {

  const classes = useStyles();

  return (
    <AppBar className={classes.nav} position="static">
      <ToolBar>
        <Typography variant="h3">Landing 1</Typography>
      </ToolBar>
    </AppBar>
  );

}

export default Nav;