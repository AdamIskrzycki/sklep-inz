import React from 'react';
import "./Cart.css";
import CartProduct from './CartProduct';

const Cart = (props) => {
    
    const totalPrice = props.products.reduce((acc, product) => product.discountedPrice ? acc + product.discountedPrice : acc + product.price, 0);

    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
            <p>{props.products ? "Total amount of products: " + props.products.length : "no items!"}</p>
            <p>{"Total price: " + totalPrice.toFixed(2) + "$"}</p>
            <CartProduct products={props.products} />
        </div>
    );
}

export default Cart;

// dodac key do zmapowanych tablic (nie mam pojecia dlaczego to nie dziala)