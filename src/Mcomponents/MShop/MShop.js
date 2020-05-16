import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import MProduct from "./MProduct";

const styles = (theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  product: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  productMedia: {
    paddingTop: "56.25%", // 16:9
  },
  productContent: {
    flexGrow: 1,
  },
  regularPriceCrossed: {
    fontSize: "20px",
    fontWeight: "500",
    textDecoration: "line-through",
    color: "grey",
  },
  discountedPrice: {
    fontSize: "30px",
    color: "red",
    marginLeft: "30px",
  },
  regularPrice: {
    fontSize: "27px",
  },
  header: {
    marginTop: "30px",
    letterSpacing: "2px",
  },
});

class MShop extends Component {
  state = {
    products: null,
    cartProducts: [],
    showModal: false,
    clearCart: false,
    isCartEmpty: false,
  };

  updateCart = (product) => {
    this.setState({
      cartProducts: this.state.cartProducts.concat(product),
    });
  };

  handleModalAppearing = () => {
    this.setState({ showModal: true });
  };

  handleModalHiding = () => {
    this.setState({ showModal: false });
  };

  continueToCheckout = () => {
    alert("You continue!");
  };

  handleCartClearing = () => {
    this.setState({ cartProducts: [], isCartEmpty: true });
  };

  displayPrice = (price, discountedPrice) => {
    const { classes } = this.props;

    if (discountedPrice) {
      return (
        <>
          <span className={classes.regularPriceCrossed}>{"$" + price}</span>
          <span className={classes.discountedPrice}>{"only $" + discountedPrice}</span>
        </>
      );
    } else return <span className={classes.regularPrice}>{"$" + price}</span>;
  };

  componentDidMount() {
    db.collection("products")
      .get()
      .then((snapshot) => {
        const updatedProducts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          updatedProducts.push({ ...data, id: doc.id });
        });
        this.setState({ products: updatedProducts });
      });
  }

  render() {
    const { classes } = this.props;
    const totalPrice = this.state.cartProducts.reduce(
      (acc, product) => (product.discountedPrice ? acc + product.discountedPrice : acc + product.price),
      0
    );

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {this.state.products &&
            this.state.products.map((product) => (
              <MProduct
                name={product.name}
                price={product.price}
                discountedPrice={product.discountedPrice}
                display={this.displayPrice}
              />
            ))}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(MShop);
