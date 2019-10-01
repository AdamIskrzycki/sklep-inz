import React from 'react';
import "./Cart.css";
import CartProduct from './CartProduct';

const Cart = (props) => {
    
    const totalPrice = props.products.reduce((acc, product) => product.discountedPrice ? acc + product.discountedPrice : acc + product.price, 0);
    // const productInfo = props.products.map((product, index) => {

    //     return (
    //     <>
    //         <div className="ProductInfo" key={product.id}>
    //             <span>{product.name + " | "}</span>
    //             <span>{product.discountedPrice ? product.discountedPrice + "$" : product.price + "$"}</span>
    //             <br/>
    //         </div>
    //     </>
    //      )
    // })

    return (
        <div className="Cart">
            <p style={{textDecoration: 'underline'}}>CART</p>
            <p>{props.products ? "Total amount of products: " + props.products.length : "no items!"}</p>
            <p>{"Total price: " + totalPrice + "$"}</p>
            <CartProduct products={props.products} />
        </div>
    );
}

export default Cart;

// podzielic produkty wyswietlane w koszyku na oddzielne komponenty
// dodac key do zmapowanych tablic (nie mam pojecia dlaczego to nie dziala)