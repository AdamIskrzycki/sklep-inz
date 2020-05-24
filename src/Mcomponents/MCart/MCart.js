import React, { Component } from "react";
import { Grid, Typography, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: theme.spacing(4, 0, 5),
    textAlign: "center",
  },
  align: {
    textAlign: "center",
  },
  list: {
    marginLeft: "25%",
  },
});

const groupBy = (list, key) => {
  const groupedArray = [];

  list.forEach((item) => {
    const collection = groupedArray.find((elem) => elem[key] === item[key]);

    if (!collection) {
      item.count = 1;
      groupedArray.push(item);
    } else {
      collection.count++;
    }
  });

  return groupedArray;
};

class MCart extends Component {
  render() {
    const { classes } = this.props;
    const totalPrice = this.props.products.reduce(
      (acc, product) => (product.discountedPrice ? acc + product.discountedPrice : acc + product.price),
      0
    );

    const grouped = groupBy(this.props.products, "id").sort((a, b) => a.name.localeCompare(b.name));
    return (
      <>
        <Typography variant="h4" className={classes.title}>
          CART
        </Typography>
        <Typography variant="h5" className={classes.align}>
          {this.props.products ? "Total amount of products: " + this.props.products.length : "Your cart is cleared"}
        </Typography>
        {/* <Typography variant="h5" className={classes.align}>{"Total price: " + totalPrice.toFixed(2) + "$"}</Typography> */}
        <List className={classes.list}>
          {grouped.map((product) => (
            <ListItem>
              <AddIcon onClick={() => this.props.addItem(product)} />
              <RemoveIcon onClick={() => this.props.removeOne(product.id)} />
              {product.name + " | " + product.price + " | x" + product.count}
              <DeleteIcon onClick={() => this.props.removeAll(product.id)}></DeleteIcon>
            </ListItem>
          ))}
        </List>
        <Typography>Total Price: {totalPrice}</Typography>
      </>
    );
  }
}

export default withStyles(styles)(MCart);
