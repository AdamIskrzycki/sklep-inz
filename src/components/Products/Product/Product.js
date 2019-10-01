import React from 'react';
import './Product.css';



const Product = (props) => {

    let crossedPrice;

     if(props.discountedPrice) {
        crossedPrice = 
        (   <>
                <span className="CrossedPrice">{props.price + "$"}</span>
                <span className="NewPrice">{"only " + props.discountedPrice + "$"}</span>
            </>
        ) 
    } else crossedPrice = <span>{props.price + "$"}</span>

    return (
        <div className='Product'>
            <p className="ProductName">{props.name}</p>
            <p>{crossedPrice}</p>
            <button onClick={props.updateCart} className="BuyButton">Buy</button>
        </div>
    )
}

export default Product;