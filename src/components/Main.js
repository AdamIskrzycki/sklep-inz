import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  welcome: {
    '@media (max-width: 400px)': {
      fontSize: '50px'
    }
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography className={classes.welcome}component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to <br></br>online shop!
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Below button lets you see, what products are currently available in the shop's stock.
            After signing in, you can order the products added to your shopping cart!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" component={Link} to={"/shop"}>
                  Go shopping
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
