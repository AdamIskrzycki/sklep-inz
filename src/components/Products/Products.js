import React, {Component} from 'react';
import Product from '../Products/Product/Product';

class Products extends Component {

    state = {
        products: [
          { name: "Water", price: 2, discountedPrice: 1.5 },
          { name: "Bread", price: 2.5, discountedPrice: 2 },
          { name: "Cheese", price: 4.59, discountedPrice: 3 }
        ]
      }
    
     addToCart = (product) => {
        alert("Adding product to cart");
      }

    render() {
        return (
            <React.Fragment>
                <Product
                    name={this.state.products[0].name}
                    price={this.state.products[0].price}
                    discountedPrice={this.state.products[0].discountedPrice}
                    addToCart={this.addToCart}/>

                <Product
                    name={this.state.products[1].name}
                    price={this.state.products[1].price}
                    discountedPrice={this.state.products[1].discountedPrice}
                    addToCart={this.addToCart}/>

                <Product
                    name={this.state.products[2].name}
                    price={this.state.products[2].price}
                    discountedPrice={this.state.products[2].discountedPrice}
                    addToCart={this.addToCart}/>
                    
            </React.Fragment>
        );
    }
}

export default Products;