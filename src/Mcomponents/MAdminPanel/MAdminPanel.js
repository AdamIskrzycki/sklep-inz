import React, { Component } from "react";
import MAdminPanelControls from "./MAdminPanelControls";
import MProdcutsInfo from "./MProductsInfo";
import { db } from "../../firebase";
import { Grid } from "@material-ui/core";

class MAdminPanel extends Component {
  state = {
    products: null,
  };

  addNewProduct = (name, price, discountedPrice) => {
    db.collection("products").add({
      name: name,
      price: +price,
      discountedPrice: +discountedPrice,
    });

    this.getProducts();
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
    db.collection("products").doc(id).delete().then(this.getProducts());
  };

  componentDidMount = () => {
    this.getProducts();
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <MProdcutsInfo
              products={this.state.products}
              delete={this.deleteProduct}
            />
          </Grid>
          <Grid item sm={9} md={6}>
            <MAdminPanelControls add={this.addNewProduct} />
          </Grid>
          <Grid item sm={0} md={3}></Grid>
        </Grid>
        {/* <MProdcutsInfo products={this.state.products} delete={this.deleteProduct}/>
                <MAdminPanelControls add={this.addNewProduct}/> */}
      </React.Fragment>
    );
  }
}

export default MAdminPanel;
