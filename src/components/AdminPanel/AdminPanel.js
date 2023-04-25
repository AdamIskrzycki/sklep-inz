import React, { Component } from "react";
import AdminPanelControls from "./AdminPanelControls";
import ProductsInfo from "./ProductsInfo";
import { db } from "../../firebase";
import classes from './AdminPanel.module.css';

class AdminPanel extends Component {
  state = {
    products: null,
    product: undefined,
  };

  addNewProduct = (name, price, discountedPrice, image) => {
    db.collection("products")
      .add({
        name: name,
        price: +price,
        discountedPrice: discountedPrice === "" ? null : +discountedPrice,
        image: image,
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

  updateProduct = (id, name, price, discountedPrice, image) => {
    db.collection("products")
      .doc(id)
      .set({
        name: name,
        price: +price,
        discountedPrice: discountedPrice === "" ? null : +discountedPrice,
        image: image,
      })
      .then(this.getProducts);
    this.setState({ product: undefined });
  };

  componentDidMount = () => {
    this.getProducts();
  };

  render() {
    return (
      <React.Fragment>
        <div className={classes.container}>
          <div className={classes.productsInfo}>
          <ProductsInfo products={this.state.products} delete={this.deleteProduct} edit={this.editProduct} />
          </div>
          <div className={classes.controls}>
          <AdminPanelControls add={this.addNewProduct} update={this.updateProduct} product={this.state.product} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPanel;
