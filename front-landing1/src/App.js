import React from 'react';
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Main from "./main.js";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

// import logo from './logo.svg';
// import './App.css';

const useStyles = makeStyles(theme => ({
  // container: {
  //   minHeight: "75vh",
  //   display: "flex",
  //   width: "100%",
  //   textAlign: "center"
  // }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="app">

      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
