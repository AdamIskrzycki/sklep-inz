import React, {Component} from 'react';
import Product from '../Products/Product/Product';
import Cart from '../Cart/Cart';
import EmptyCart from '../Cart/EmptyCart';
import CartProduct from '../Cart/CartProduct';
import Navigation from '../Navigation/Navigation';
import { Dialog, Button, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { db } from '../../firebase';
import '../Navigation/Navigation.css';

class Products extends Component {

    state = {
        products: null,
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

      componentDidMount () {
          db.collection('products').get().then( snapshot => {
              const updatedProducts = [];
              snapshot.forEach( doc => {
                  const data = doc.data();
                  console.log(data);
                  updatedProducts.push({...data, id: doc.id});
              })
              this.setState({products: updatedProducts});
          })
      }


    render() {


        const totalPrice = this.state.cartProducts.reduce((acc, product) => product.discountedPrice ? acc + product.discountedPrice : acc + product.price, 0);
        return (
            <React.Fragment>

                    <Navigation className='Navigation'/>
                    
            
                <h1 className='Title'>Welcome to my shop!</h1>

                {   this.state.cartProducts.length > 0 ? <Cart
                    products={this.state.cartProducts}
                    handleModalAppearing={this.handleModalAppearing}
                    handleCartClearing={this.handleCartClearing}
                /> : <EmptyCart empty={this.state.isCartEmpty}/>}
                
                { <Dialog open={this.state.showModal} onClose={this.handleModalHiding}>
                    <DialogTitle style={{textAlign: 'center'}}>YOUR ORDER</DialogTitle>
                    <DialogContent dividers>
                    <Typography style={{marginBottom: '30px', textAlign: 'center'}}>
                        <CartProduct products={this.state.cartProducts}/>
                <Typography style={{marginTop: '20px', fontWeight: '600'}}>{"Total price: $" + totalPrice.toFixed(2)}</Typography>
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
                </Dialog> }

                

                    <div style={{width: '1000px', margin: 'auto', marginTop: '100px'}}>

                    { this.state.products ? this.state.products.map(product => {
                        
                        return (
                            <Product
                                name={product.name}
                                price={product.price}
                                discountedPrice={product.discountedPrice}
                                updateCart={() => this.updateCart(product)}
                                key={product.id}/>
                            )   
                        }
                    ) : null
                }

                    </div>

                    

            </React.Fragment>
        );
    }
}

export default Products; 