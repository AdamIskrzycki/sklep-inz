import React, {Component} from 'react';
import Product from '../Products/Product/Product';
import Cart from '../Cart/Cart';
import EmptyCart from '../Cart/EmptyCart';
import CartProduct from '../Cart/CartProduct';
import Modal from '../PurchaseSummary/Modal/Modal';
import { Dialog, Button, DialogContent, DialogTitle, Typography } from '@material-ui/core';

class Products extends Component {

    state = {
        products: [
          { name: "Water", price: 2, discountedPrice: 1.5, id: 1},
          { name: "Bread", price: 2.5, discountedPrice: 2, id: 2},
          { name: "Cheese", price: 4.59, id: 3}
        ] ,
        cartProducts: [],
        showModal: false,
        clearCart: false,
        isCartEmpty: false
      }

      
    
     updateCart = (product) => {
        
        this.setState({
            cartProducts: this.state.cartProducts.concat(product)
          });
    
      }

      handleModalAppearing = () => {
          this.setState({showModal: true});
      }

      handleModalHiding = () => {
          this.setState({showModal: false});
      }

      continueToCheckout = () => {
          alert("You continue!");
      }

      handleCartClearing = () => {
        this.setState({cartProducts: [], isCartEmpty: true});
      }


    render() {

        const totalPrice = this.state.cartProducts.reduce((acc, product) => product.discountedPrice ? acc + product.discountedPrice : acc + product.price, 0);

        return (
            <React.Fragment>

                {this.state.cartProducts.length > 0 ? <Cart
                    products={this.state.cartProducts}
                    handleModalAppearing={this.handleModalAppearing}
                    handleCartClearing={this.handleCartClearing}
                /> : <EmptyCart empty={this.state.isCartEmpty}/>}
                
                {<Dialog open={this.state.showModal} onClose={this.handleModalHiding}>
                    <DialogTitle style={{textAlign: 'center'}}>YOUR ORDER</DialogTitle>
                    <DialogContent dividers>
                    <Typography style={{marginBottom: '30px', textAlign: 'center'}}>
                        <CartProduct products={this.state.cartProducts}/>
                        <Typography style={{marginTop: '20px', fontWeight: '600'}}>{"Total price: " + totalPrice.toFixed(2) + "$"}</Typography>
                    </Typography>
                    

                    <Button onClick={this.continueToCheckout}
                            variant="contained" 
                            style={{
                                marginRight: '20px',
                                backgroundColor: '#B6FCD5',
                                fontWeight: '600'
                                }}>Checkout</Button>
                    <Button onClick={this.handleModalHiding}
                             variant="contained"
                             style={{
                                backgroundColor: '#FF9191',
                                fontWeight: '600'
                             }} >Back</Button>
                        
                    </DialogContent>
                </Dialog>}

                

                
                    {this.state.products.map((product, index) => {
                        
                        return (
                            <Product
                                name={product.name}
                                price={product.price}
                                discountedPrice={product.discountedPrice}
                                updateCart={() => this.updateCart(product)}
                                key={product.id}/>
                            )   
                        }
                    )}

                    

            </React.Fragment>
        );
    }
}

export default Products; 