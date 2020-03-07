import React, {Component} from 'react';
import "./Cart.css";
import CartProduct from './CartProduct';
import { Button } from '@material-ui/core';
import "./CartButtons/OrderButton.css";
import "./CartButtons/ClearCartButton.css";

class Cart extends Component {

    render() {
        const totalPrice = this.props.products.reduce((acc, product) => product.discountedPrice ? acc + product.discountedPrice : acc + product.price, 0);

    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
                <p>{this.props.products ? "Total amount of products: " + this.props.products.length : "Your cart is cleared"}</p>
                <p>{"Total price: " + totalPrice.toFixed(2) + "$"}</p>
            <CartProduct products={this.props.products} />
            <Button onClick={this.props.handleCartClearing} variant="contained" className="ClearCartButton">Clear Cart</Button>
            <Button onClick={this.props.handleModalAppearing} variant="contained" className="OrderButton">Order</Button>
        </div>
        );
    }
}

export default Cart;