import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    
    const totalPrice = props.products.reduce((acc, product) => acc + product.discountedPrice, 0);
    const productInfo = props.products.map(product => {
        return (
        <>
            <span>{product.name + " "}</span>
            <span>{product.discountedPrice}</span>
            <br/>
        </>
         )
    })

    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
            <p>{props.products ? props.products.length : "no items!"}</p>
            <p>{totalPrice}</p>
            <p>{productInfo}</p>
        </div>
    );
}

export default Cart;