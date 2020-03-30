import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import './App.css';
import Nav from "./components/nav";
import Footer from "./components/footer";

const styles = {
    container: {
        minHeight: "75vh",
        paddingTop: 30,
        marginTop: 30,
        display: "flex",
        width: "100%",
        textAlign: "center"
    },
    introContainer: {
        marginTop: 30,
        paddingTop: 15,
    },
    introWrapper: {
        paddingBottom: "15px",
        color: "white"
    },
    buttonWrapper: {
        paddingTop: "15px"
    },

    intro: {
        fontWeight: "normal",
        fontSize: "150%"
    }
}
class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const { classes } = this.props;
        return (
          <div>
            <Nav />
            <div className={classes.container}>
              <Grid container>
                <Grid item xs={12} className={classes.introContainer}>
                  <div className={classes.introWrapper}>
                    <Typography
                      className={classes.intro}
                      variant="h2"
                      gutterBottom
                    >
                      If you don’t like something, change it. <br />
                      If you can’t change it, <br />
                      Change the way you think about it.
                    </Typography>
                  </div>

                  <div className={classes.introWrapper}>
                    <Typography
                      variant="body2"
                      gutterBottom
                    >
                      by Mary Engelbreit
                    </Typography>
                  </div>

                  <div className={classes.buttonWrapper}>
                    <Button variant="contained" className="subscribe-btn">
                      Button
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>

            <Footer />
          </div>
        );
    }
}

export default withStyles(styles)(Main);