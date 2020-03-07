import React from 'react';
import './Product.css';
import { Button } from '@material-ui/core';



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
            <Button onClick={props.updateCart} className="BuyButton" variant="contained">Buy</Button>
        </div>
    )
}

export default Product;