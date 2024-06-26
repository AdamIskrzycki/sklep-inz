import React, { Component } from "react";
import { Typography, List, ListItem, ListItemText, Tooltip, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
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
  totalAmount: {
    textAlign: "center",
    fontWeight: "600",
  },
  cartProduct: {
    marginLeft: "20px",
    fontWeight: "550",
  },
  list: {
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
    marginLeft: "37%",
    marginRight: "37%",
    width: "26%",
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

    let cart = (
      <>
        <List className={classes.list}>
          {grouped.map((product) => (
            <ListItem alignItems="left">
              <Tooltip title="More">
                <AddIcon className={classes.icon} onClick={() => this.props.onAddProduct(product)} />
              </Tooltip>
              <Tooltip title="Less">
                <RemoveIcon className={classes.icon} onClick={() => this.props.onRemoveProduct(product.id)} />
              </Tooltip>
              <ListItemText
                primary={
                  <Typography className={classes.cartProduct}>
                    {product.name +
                      " | $" +
                      (product.discountedPrice ? product.discountedPrice : product.price) +
                      " | x" +
                      product.count}
                  </Typography>
                }
              />
              <Tooltip title="Delete">
                <DeleteIcon
                  className={classes.icon}
                  onClick={() => this.props.onRemoveAllProducts(product.id)}
                ></DeleteIcon>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Typography variant="h5" className={classes.totalPrice}>
          Total price: {"$" + totalPrice.toFixed(2)}
        </Typography>
        <Typography variant="h5" className={classes.totalAmount}>
          {this.props.products ? "Products in cart: " + this.props.products.length : "Your cart is empty"}
        </Typography>
        <Tooltip arrow title="Sign in to make an order" open={this.props.isAuthenticated ? false : true}>
          <div className={classes.buttonContainer}>
            <Button
              component={Link}
              to={"/checkout"}
              variant="contained"
              color="primary"
              className={classes.checkoutButton}
              disabled={this.props.isAuthenticated ? false : true}
            >
              Order
            </Button>
          </div>
        </Tooltip>
      </>
    );

    if (this.props.products.length === 0) {
      cart = (
        <>
          <Typography variant="h6" align="center">
            Go back to shop to continue shopping!
          </Typography>
          <Button variant="contained" color="primary" className={classes.checkoutButton} onClick={this.props.clicked}>
            Back
          </Button>
        </>
      );
    }

    return [cart];
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
