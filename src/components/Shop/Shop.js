import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import Product from "./Product";
import Cart from "../Cart/Cart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Dialog, DialogContent, DialogTitle, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

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
    // "@media (max-width: 1200px)": {
      flexWrap: "wrap",
    //},
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
    display: "flex",
    paddingTop: "15px",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    borderRadius: "50px",
    "@media (max-width: 800px)": {
      width: "80%",
    },
  },
  searchButton: {
    marginLeft: "10px",
    marginRight: "70px",
    padding: "none",
  },
  searchContainer: {
    width: "90%",
    display: "flex"
  },
  sortContainer: {
    width: "10%",
  },
});

const Shop = (props) => {
  const [products, setProducts] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const toggleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const displayPrice = (price, discountedPrice) => {
    const { classes } = props;

    if (discountedPrice) {
      return (
        <>
          <span className={classes.regularPriceCrossed}>{price + "zł"}</span>
          <span className={classes.discountedPrice}>{discountedPrice + "zł"}</span>
        </>
      );
    } else return <span className={classes.regularPrice}>{price + "zł"}</span>;
  };

  const onInputChange = (e) => {
    setSearchValue(e.target.value.toLowerCase().trim());
    if (e.target.value.length === 0) {
      setVisibleProducts(products);
    }
  };

  const filterProducts = () => {
    const filteredProducts = products.filter((el) => el.name === searchValue);
    setVisibleProducts(filteredProducts);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchValue !== "") {
      filterProducts();
    }
  };

  const onSortChange = (e) => {
    setSortValue(e.target.value);
  };

  useEffect(() => {
    db.collection("products")
      .get()
      .then((snapshot) => {
        const updatedProducts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          updatedProducts.push({ ...data, id: doc.id });
        });
        setProducts(updatedProducts);
        setVisibleProducts(updatedProducts);
      });
  }, []);



  useEffect(() => {

    let sortedProducts = [];
    let copiedProducts = [];

    switch (sortValue) {
      case "latest":
        sortedProducts = [...products];
        setVisibleProducts(sortedProducts)
        console.log("latest: ", sortedProducts);
        break;
      case "newest":
        copiedProducts = [...products]
        sortedProducts = copiedProducts.reverse();
        setVisibleProducts(sortedProducts)
        console.log("newest: ", sortedProducts);
        break;
      case "az":
        copiedProducts = [...products]
        sortedProducts = copiedProducts.sort((a, b) => (a.name > b.name) ? 1: -1);
        setVisibleProducts(sortedProducts)
        console.log("az: ", sortedProducts);
        break;
      case "za":
        copiedProducts = [...products]
        sortedProducts = copiedProducts.sort((a, b) => (b.name > a.name) ? 1: -1);
        setVisibleProducts(sortedProducts)
        console.log("za: ", sortedProducts);
        break;
      case "priceAsc":
        copiedProducts = [...products]
        const productsWithBuyingPriceArrayAsc = copiedProducts.map((obj) => ({
          ...obj,
          buyingPrice: obj.discountedPrice !== 0 ? obj.discountedPrice : obj.price,
        }));
         sortedProducts = productsWithBuyingPriceArrayAsc.sort((a, b) => {
           return a.buyingPrice > b.buyingPrice ? 1: -1;
         })
        setVisibleProducts(sortedProducts)
        console.log("priceAsc: ", sortedProducts);
        break;
      case "priceDesc":
        copiedProducts = [...products]
        const productsWithBuyingPriceArrayDesc = copiedProducts.map((obj) => ({
          ...obj,
          buyingPrice: obj.discountedPrice !== 0 ? obj.discountedPrice : obj.price,
        }));
         sortedProducts = productsWithBuyingPriceArrayDesc.sort((a, b) => {
           return b.buyingPrice > a.buyingPrice ? 1: -1;
         })
        setVisibleProducts(sortedProducts)
        console.log("priceDesc: ", sortedProducts);
        break;
      default:
        sortedProducts = visibleProducts;
        setVisibleProducts(sortedProducts)
        console.log("default case");
        break;
    }
  }, [sortValue])

  const isCartVisible = props.cartProducts.length > 0;

  return (
    <React.Fragment>
      {isCartVisible && <ShoppingCartIcon className={props.classes.cartIcon} onClick={toggleOpenCart} />}
      <div className={props.classes.searchProducts}>
        <div className={props.classes.searchContainer}>
          <TextField
            id="search"
            label="Wyszukaj produkt"
            fullWidth
            variant="outlined"
            onChange={onInputChange}
            onKeyPress={handleKeyPress}
          />
          <Button
            className={props.classes.searchButton}
            size="small"
            color="primary"
            disabled={searchValue.length === 0}
            onClick={filterProducts}
            variant="outlined"
          >
            SZUKAJ
          </Button>
        </div>
        <div className={props.classes.sortContainer}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sortuj</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortValue}
              onChange={onSortChange}
              label="Sortuj"
            >
              <MenuItem value={"latest"}>Od najstarszych</MenuItem>
              <MenuItem value={"newest"}>Od najnowszych</MenuItem>
              <MenuItem value={"az"}>Po nazwie A-Z</MenuItem>
              <MenuItem value={"za"}>Po nazwie Z-A</MenuItem>
              <MenuItem value={"priceAsc"}>Po cenie rosnąco</MenuItem>
              <MenuItem value={"priceDesc"}>Po cenie malejąco</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={props.classes.shopContainer}>
        <div className={props.classes.productsContainer}>
          {visibleProducts &&
            visibleProducts.map((product) => (
              <Product data={product} display={displayPrice} key={product.id} onBuy={props.onAddProduct} />
            ))}
        </div>
        <Dialog onClose={toggleOpenCart} aria-labelledby="customized-dialog-title" open={isCartOpen}>
          <DialogTitle align="center">
            {props.cartProducts.length > 0 ? "Twój koszyk" : "Twój koszyk jest pusty"}
          </DialogTitle>
          <DialogContent dividers>
            <Cart products={props.cartProducts} clicked={toggleOpenCart} />
          </DialogContent>
        </Dialog>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Shop));