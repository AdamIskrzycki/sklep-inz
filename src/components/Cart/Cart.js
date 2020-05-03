import React, {Component} from 'react';
import "./Cart.css";
import CartProduct from './CartProduct';
import { Button } from '@material-ui/core';
class Cart extends Component {

    render() {
        const totalPrice = this.props.products.reduce((acc, product) => product.discountedPrice ? acc + +product.discountedPrice : acc + +product.price, 0);

    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
                <p>{this.props.products ? "Total amount of products: " + this.props.products.length : "Your cart is cleared"}</p>
                <p>{"Total price: " + totalPrice.toFixed(2) + "$"}</p>
                <div style={{marginBottom: '20px'}}>
                    <CartProduct products={this.props.products} />
                </div>
            <Button onClick={this.props.handleCartClearing}
                    size='small' variant="contained" 
                    style={{
                        marginRight: '10px',
                        fontWeight: '600'
                        }}>Clear Cart</Button>
            <Button onClick={this.props.handleModalAppearing} 
                    size='small' 
                    variant="contained" style={{
                        fontWeight: '600'
                    }}>Order</Button>
        </div>
        );
    }
}

export default Cart;