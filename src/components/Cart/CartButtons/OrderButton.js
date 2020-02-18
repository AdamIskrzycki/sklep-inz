import React from 'react';
import "./OrderButton.css";

const OrderButton = (props) => {
    return (
        <button className="OrderButton" onClick={props.loadModal}>ORDER</button>
    )
}

export default OrderButton;
