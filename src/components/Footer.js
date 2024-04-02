import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    }
  }));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"All rights reserved © "}
      <span color="inherit">
        Online shop
      </span>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        In case of any question, please reach out to us via e-mail: onlineshop@gmail.com
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
