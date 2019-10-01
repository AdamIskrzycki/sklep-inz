import React, {Component} from 'react';
import Product from '../Products/Product/Product';
import Cart from '../Cart/Cart';
import CartProduct from '../Cart/CartProduct';

class Products extends Component {

    state = {
        products: [
          { name: "Water", price: 2, discountedPrice: 1.5, id: 1},
          { name: "Bread", price: 2.5, discountedPrice: 2, id: 2},
          { name: "Cheese", price: 4.59, id: 3}
        ] ,
        cartProducts: [],
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