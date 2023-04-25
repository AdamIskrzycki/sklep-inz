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
      {"Wszelkie prawa zastrzeżone © "}
      <span color="inherit">
        Sklep internetowy
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
        W razie pytań, proszę o kontakt na adres onlineshop@gmail.com
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
