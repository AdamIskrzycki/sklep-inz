import React, {Component} from 'react';
import Product from '../Products/Product/Product';
import Cart from '../Cart/Cart';

class Products extends Component {

    state = {
        products: [
          { name: "Water", price: 2, discountedPrice: 1.5},
          { name: "Bread", price: 2.5, discountedPrice: 2},
          { name: "Cheese", price: 4.59, discountedPrice: 3}
        ] ,
        cartProducts: [],
        totalPrice: 0,
        itemInfo: ''
      }
    
     updateCart = (product) => {
        
        this.setState({
            cartProducts: this.state.cartProducts.concat(product)
          })

      }


    render() {
        return (
            <React.Fragment>
                
                {this.state.cartProducts.length > 0 ? <Cart
                    products={this.state.cartProducts}
                /> : null}

                
                    {this.state.products.map(product => {
                        
                        return (
                            <Product name={product.name} price={product.price} discountedPrice={product.discountedPrice} updateCart={() => this.updateCart(product)}/>
                            )   
                        }
                    )}

            </React.Fragment>
        );
    }
}

export default Products;