import React from 'react';
import "./CheckoutButton.css";

const CheckoutButton = (props) => {
    return (
        <button className="CheckoutButton" onClick={props.clicked}>CHECKOUT</button>
    )
}

export default CheckoutButton;