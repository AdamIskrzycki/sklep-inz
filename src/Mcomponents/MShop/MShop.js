import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import MProduct from "./MProduct";
import MCart from "../MCart/MCart";
import { Box, Grid } from "@material-ui/core";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

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
    paddingTop: "56.25%",
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
    const isCartVisible = this.props.cartProducts.length > 0;
    return (
      <React.Fragment>
        <Box mt={5} ml={5}>
          <Grid container spacing={2} xs={12} alignContent="center">
            <Grid item container spacing={2} xs={isCartVisible ? 8 : 12}>
              {this.state.products &&
                this.state.products.map((product) => (
                  <Grid item key={this.props.id} xs={8} sm={5} md={isCartVisible ? 3 : 2}>
                    <MProduct
                      data={product}
                      display={this.displayPrice}
                      key={product.id}
                      onBuy={this.props.onAddProduct}
                    />
                  </Grid>
                ))}
            </Grid>
            {isCartVisible && (
              <Grid item container xs={4}>
                <Grid item xs={12}>
                  <MCart
                    products={this.props.cartProducts}
                    handleModalAppearing={this.handleModalAppearing}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts,
  };
};


export default connect(mapStateToProps)(withStyles(styles)(MShop));
