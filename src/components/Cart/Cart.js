import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    
    const totalPrice = props.products.reduce((acc, product) => acc + product.discountedPrice, 0)

    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
            <p>{props.products ? props.products.length : "no items!"}</p>
            <p>{totalPrice}</p>
        </div>
    );
}

export default Cart;