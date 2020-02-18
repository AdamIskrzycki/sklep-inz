import React, {Component} from 'react';
import "./Cart.css";
import CartProduct from './CartProduct';
import OrderButton from './CartButtons/OrderButton';
import ClearCartButton from './CartButtons/ClearCartButton';

class Cart extends Component {

    render() {
        const totalPrice = this.props.products.reduce((acc, product) => product.discountedPrice ? acc + product.discountedPrice : acc + product.price, 0);

    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
                <p>{this.props.products ? "Total amount of products: " + this.props.products.length : "Your cart is cleared"}</p>
                <p>{"Total price: " + totalPrice.toFixed(2) + "$"}</p>
            <CartProduct products={this.props.products} />
            <ClearCartButton clicked={this.props.handleCartClearing}/>
            <OrderButton loadModal={this.props.handleModalAppearing}/>
        </div>
        );
    }
}

export default Cart;