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
        cartVisibility: false,
        totalPrice: 0,
        itemInfo: ''
      }
    
     updateCart = () => {
        //alert("Adding product to cart");
        
        if(!this.state.cartVisibility) {
            this.setState({cartVisibility: true});
        }

        const productInfo = this.state.products.map(product => {
             let newPrice = product.discountedPrice;
             let currentPrice = this.state.totalPrice;
             currentPrice += newPrice;
            return product.name + ' | $' + product.discountedPrice;
        })
        
        this.setState({itemInfo: productInfo});

      }


    render() {
        return (
            <React.Fragment>
                
                {this.state.cartVisibility ? <Cart
                    itemInfo={this.state.itemInfo}
                    totalPrice={this.state.totalPrice}
                /> : null}

                <Product
                    name={this.state.products[0].name}
                    price={this.state.products[0].price}
                    discountedPrice={this.state.products[0].discountedPrice}
                    updateCart={this.updateCart}/>
            
                <Product
                    name={this.state.products[1].name}
                    price={this.state.products[1].price}
                    discountedPrice={this.state.products[1].discountedPrice}
                    updateCart={this.updateCart}/>

                <Product
                    name={this.state.products[2].name}
                    price={this.state.products[2].price}
                    discountedPrice={this.state.products[2].discountedPrice}
                    updateCart={this.updateCart}/>
                    
            </React.Fragment>
        );
    }
}

export default Products;