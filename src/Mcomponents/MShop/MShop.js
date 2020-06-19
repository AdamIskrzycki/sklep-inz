import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import MProduct from "./MProduct";
import MCart from "../MCart/MCart";
import { Box, Typography, Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";

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
    cartRendered: false,
  };

  addToCart = (product) => {
    delete product.count;
    this.setState({ cartProducts: [...this.state.cartProducts, product] });
  };

  removeAllFromCart = (id) => {
    this.setState({ cartProducts: [...this.state.cartProducts.filter((x) => x.id !== id)] });
  };

  removeOneFromCart = (id) => {
    const findIndex = this.state.cartProducts.findIndex((el) => el.id === id);
    const splicedArray = [...this.state.cartProducts];
    splicedArray.splice(findIndex, 1);
    this.setState({ cartProducts: splicedArray });
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

  handleModalAppearing = () => {
    this.setState({ showModal: true });
  };

  handleModalHiding = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    db.collection("products")
      .get()
      .then((snapshot) => {
        const updatedProducts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          updatedProducts.push({ ...data, id: doc.id });
        });
        this.setState({ products: updatedProducts });
      });
  }

  render() {
    const isCartVisible = this.state.cartProducts.length > 0;
    return (
      <React.Fragment>
        <Box mt={5} ml={5}>
          <Grid container spacing={2} xs={12} alignContent="center">
            <Grid item container spacing={2} xs={isCartVisible ? 8 : 12}>
              {this.state.products &&
                this.state.products.map((product) => (
                  <Grid item key={this.props.id} xs={8} sm={5} md={isCartVisible ? 3 : 2}>
                    <MProduct data={product} display={this.displayPrice} key={product.id} onBuy={this.addToCart} />
                  </Grid>
                ))}
            </Grid>
            {isCartVisible && (
              <Grid item container xs={4}>
                <Grid item xs={12}>
                  <MCart
                    products={this.state.cartProducts}
                    addItem={this.addToCart}
                    removeAll={this.removeAllFromCart}
                    removeOne={this.removeOneFromCart}
                    handleModalAppearing={this.handleModalAppearing}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>

        <Dialog open={this.state.showModal} onClose={this.handleModalHiding}>
          <DialogTitle style={{ textAlign: "center" }}>YOUR ORDER</DialogTitle>
          <DialogContent dividers>
            <Typography style={{ marginBottom: "30px", textAlign: "center" }}></Typography>

            <Button
              onClick={this.continueToCheckout}
              variant="contained"
              style={{
                marginRight: "20px",
                backgroundColor: "#B6FCD5",
                fontWeight: "600",
              }}
            >
              Checkout
            </Button>
            <Button
              onClick={this.handleModalHiding}
              variant="contained"
              style={{
                backgroundColor: "#FF9191",
                fontWeight: "600",
              }}
            >
              Back
            </Button>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MShop);
