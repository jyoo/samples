import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    buttonContaner: {
        padding: "8px 16px"
    },
    contactContainer: {
        padding: "8px 16px",
        display: "inline",
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    },
    button: {
        color: "white",
        backgroundColor: "transparent",
        fontWeight: 200
    }
}))

function Footer(props) {

    const classes = useStyles();

    return (
      <Box className="app-footer" display="flex" px={2} py={3} bgcolor="black">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <div className={classes.buttonContaner}>
              <Button className={classes.button} href="https://www.unlyst.com">
                Landing 1
              </Button>
            </div>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={8}
            alignItems="center"
            justify="flex-end"
          >
            <div className={classes.contactContainer}>
              <Button
                className={classes.button}
              >
                Social 1
              </Button>
            </div>
            <div className={classes.contactContainer}>
              <Button
                className={classes.button}
              >
                Social 2
              </Button>
            </div>
            <div className={classes.contactContainer}>
              <Button className={classes.button} href="mailto:jungsup.yoo@gmail.com">
                Contact Us
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    );
}

export default Footer;