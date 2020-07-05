import React, { Component } from "react";
import AdminPanelControls from "./AdminPanelControls";
import ProductsInfo from "./ProductsInfo";
import { Grid } from "@material-ui/core";
import { addNewProduct, getProducts, deleteProduct, updateProduct} from '../../service/firebaseService';

class AdminPanel extends Component {
  state = {
    products: null,
    product: undefined,
  };

  editProduct = (product) => {
    this.setState({ product });
  };

  componentDidMount = () => {
    getProducts().then((snapshot) => {
      const updatedProducts = []
      snapshot.forEach((doc) => {
        const data = doc.data();
        updatedProducts.push({ ...data, id: doc.id });
      });
       this.setState({ products: updatedProducts });
    });;
  };

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item sm={false} md={1}></Grid>
          <Grid item sm={9} md={6} xs={11}>
            <ProductsInfo products={this.state.products} delete={deleteProduct} edit={this.editProduct} />
          </Grid>
          <Grid item xs={11} md={5}>
            <AdminPanelControls add={addNewProduct} update={updateProduct} product={this.state.product} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AdminPanel;
