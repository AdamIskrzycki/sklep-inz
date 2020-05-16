import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to my online shop!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Click the buttons below to determine whether you would like to start shopping 
          or manipulate the products in the shop via the admin panel.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to={'/shop'}>
                Go Shopping
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" component={Link} to={'/admin'}>
                Admin Panel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Main;
