import React, { Component } from "react";
import MAdminPanelControls from "./MAdminPanelControls";
import MProdcutsInfo from "./MProductsInfo";
import { db } from "../../firebase";
import { Grid } from "@material-ui/core";

class MAdminPanel extends Component {
  state = {
    products: null,
    product: undefined,
  };

  addNewProduct = (name, price, discountedPrice) => {
    let dupa = null;
    if(discountedPrice !== '') { // zmienic na ternary
      dupa = +discountedPrice
    } 
    db.collection("products")
      .add({
        name: name,
        price: +price,
        discountedPrice: dupa,
      })
      .then(this.getProducts);
  };

  getProducts = () => {
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
  };

  deleteProduct = (id) => {
    db.collection("products").doc(id).delete().then(this.getProducts);
  };

  editProduct = (product) => {
    this.setState({ product });
  };

  updateProduct = (name, price, discountedPrice, id) => {
    db.collection("products")
      .doc(id)
      .set({
        name: name,
        price: price,
        discountedPrice: discountedPrice,
      })
      .then(this.getProducts);
      this.setState({product: undefined});
  };

  componentDidMount = () => {
    this.getProducts();
  };

  render() {
    console.log('product', this.state.product)
    return (
      <React.Fragment>
        <Grid container>
          <Grid item sm={0} md={1}></Grid>
          <Grid item sm={9} md={6}>
            <MProdcutsInfo products={this.state.products} delete={this.deleteProduct} edit={this.editProduct} />
          </Grid>
          <Grid item xs={5}>
            <MAdminPanelControls add={this.addNewProduct} update={this.updateProduct} product={this.state.product} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default MAdminPanel;
