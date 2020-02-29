import React from 'react';
import './Cart.css';

const EmptyCart = (props) => {
    return(
        <div className="Cart" style={{opacity: props.empty ? '1' : '0'}}>
            <p style={{textDecoration: 'underline'}}>CART</p>
            <p>Your cart is empty</p>
        </div>
    );
}

export default EmptyCart;