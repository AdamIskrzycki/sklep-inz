import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
            <p>{props.products ? props.products.length : "no items!"}</p>
        </div>
    );
}

export default Cart;