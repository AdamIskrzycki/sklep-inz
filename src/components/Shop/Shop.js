import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import Product from "./Product";
import Cart from "../Cart/Cart";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Dialog, DialogContent, DialogTitle, TextField } from "@material-ui/core";

import { connect } from "react-redux";

const styles = (theme) => ({
  shopContainer: {
    margin: "40px",
    paddingLeft: "20px",
  },
  cartIcon: {
    position: "fixed",
    fontSize: "90px",
    top: "60px",
    "@media (max-width: 380px)": {
      top: "80px",
    },
    padding: "16px",
    cursor: "pointer",
  },
  productsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1200px)": {
      flexWrap: "wrap",
    },
  },
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
  searchProducts: {
    paddingTop: "15px",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    borderRadius: "50px",
    "@media (max-width: 800px)": {
      width: "50%",
    },
  },
});

class Shop extends Component {
  state = {
    products: null,
    visibleProducts: null,
    isCartOpen: false,
    searchValue: "",
  };

  toggleOpenCart = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  };

  displayPrice = (price, discountedPrice) => {
    const { classes } = this.props;

    if (discountedPrice) {
      return (
        <>
          <span className={classes.regularPriceCrossed}>{price + "zł"}</span>
          <span className={classes.discountedPrice}>{discountedPrice + "zł"}</span>
        </>
      );
    } else return <span className={classes.regularPrice}>{price + "zł"}</span>;
  };

  onInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  filterProducts = (products) => {
    const filteredProducts = products.filter((el) => el.name === this.state.searchValue);

    this.setState({ visibleProducts: filteredProducts });
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
        this.setState({ visibleProducts: updatedProducts});
      });
  }

  render() {
    const isCartVisible = this.props.cartProducts.length > 0;
    return (
      <React.Fragment>
        {isCartVisible && <ShoppingCartIcon className={this.props.classes.cartIcon} onClick={this.toggleOpenCart} />}
        <div className={this.props.classes.searchProducts}>
          <TextField id="search" label="Wyszukaj produkty" fullWidth variant="outlined" onChange={this.onInputChange} />
          {/* <SearchIcon disabled={this.state.searchValue.length === 0} fontSize="large" onClick={() => this.filterProducts(this.state.products)}/> */}
        </div>
        <div className={this.props.classes.shopContainer}>
          <div className={this.props.classes.productsContainer}>
            {this.state.visibleProducts &&
              this.state.visibleProducts.map((product) => (
                <Product data={product} display={this.displayPrice} key={product.id} onBuy={this.props.onAddProduct} />
              ))}
          </div>
          {
            <Dialog
              onClose={this.toggleOpenCart}
              aria-labelledby="customized-dialog-title"
              open={this.state.isCartOpen}
            >
              <DialogTitle align="center">
                {this.props.cartProducts.length > 0 ? "Twój koszyk" : "Twój koszyk jest pusty"}
              </DialogTitle>
              <DialogContent dividers>
                <Cart products={this.props.cartProducts} clicked={this.toggleOpenCart} />
              </DialogContent>
            </Dialog>
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Shop));
