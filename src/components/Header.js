import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import Auth from './Auth';

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "10px",
    borderLeft: "1px dotted white",
    fontWeight: "500",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <ShoppingBasketIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Sklep internetowy
        </Typography>
        <Button className={classes.button} variant="text" color="inherit" component={Link} to={"/"}>
          Strona główna
        </Button>
        <Button className={classes.button} variant="text" color="inherit" component={Link} to={"/shop"}>
          Sklep
        </Button>
        <Button className={classes.button} variant="text" color="inherit" component={Link} to={"/admin"}>
          Panel Admina
        </Button>
        <Auth />
      </Toolbar>
    </AppBar>
  );
}
