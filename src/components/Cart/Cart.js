import React, { Component } from "react";
import { Typography, List, ListItem, ListItemText, Tooltip, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";
import { groupBy } from "../../utils";

const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  icon: {
    cursor: "pointer",
    margin: "3px",
  },
  cartIcon: {
    fontSize: "150px",
    marginLeft: "40%",
    marginBottom: "40px",
  },
  totalAmount: {
    textAlign: "center",
    fontWeight: "600",
  },
  cartProduct: {
    marginLeft: "25px",
    letterSpacing: "1px",
    fontWeight: "550",
  },
  list: {
    marginLeft: "20%",
    maxHeight: "232px",
    overflowY: "auto",
  },
  totalPrice: {
    textAlign: "center",
    marginTop: "8%",
    fontWeight: "600",
    marginBottom: "10px",
  },
  checkoutButton: {
    marginLeft: "40%",
    marginTop: "30px",
  },
});

class Cart extends Component {
  render() {
    const { classes } = this.props;
    const totalPrice = this.props.products.reduce(
      (acc, product) => (product.discountedPrice ? acc + product.discountedPrice : acc + product.price),
      0
    );

    const grouped = groupBy(this.props.products, "id").sort((a, b) => a.name.localeCompare(b.name));
    return (
      <>
        <ShoppingCartIcon className={classes.cartIcon} />
        <List className={classes.list}>
          {grouped.map((product) => (
            <ListItem alignItems="center">
              <Tooltip title="Więcej">
                <AddIcon className={classes.icon} onClick={() => this.props.onAddProduct(product)} />
              </Tooltip>
              <Tooltip title="Mniej">
                <RemoveIcon className={classes.icon} onClick={() => this.props.onRemoveProduct(product.id)} />
              </Tooltip>
              <ListItemText
                primary={
                  <Typography className={classes.cartProduct}>
                    {product.name +
                      " | " +
                      (product.discountedPrice ? product.discountedPrice : product.price) +
                      "zł | x" +
                      product.count}
                  </Typography>
                }
              />
              <Tooltip title="Usuń">
                <DeleteIcon
                  className={classes.icon}
                  onClick={() => this.props.onRemoveAllProducts(product.id)}
                ></DeleteIcon>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Typography variant="h5" className={classes.totalPrice}>
          Do zapłaty: {totalPrice + "zł"}
        </Typography>
        <Typography variant="h5" className={classes.totalAmount}>
          {this.props.products ? "Ilośc produktów w koszyku: " + this.props.products.length : "Twój koszyk jest pusty"}
        </Typography>
        <Tooltip arrow title="Zaloguj się by złożyć zamówienie" open={this.props.isAuthenticated ? false : true}>
          <Button
            component={Link}
            to={"/checkout"}
            variant="contained"
            color="primary"
            className={classes.checkoutButton}
            disabled={this.props.isAuthenticated ? false : true}
          >
            Zamów
          </Button>
        </Tooltip>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.idToken !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product) => dispatch(actionCreators.add(product)),
    onRemoveProduct: (id) => dispatch(actionCreators.removeOne(id)),
    onRemoveAllProducts: (id) => dispatch(actionCreators.removeAll(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cart));
