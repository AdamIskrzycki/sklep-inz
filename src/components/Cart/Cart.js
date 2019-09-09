import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
            <p>{props.itemInfo}</p>
            <p>Total Price: {props.totalPrice} </p>
        </div>
    );
}

export default Cart;