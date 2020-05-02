import React from 'react';
import './Product.css';
import { Button } from '@material-ui/core';



const Product = (props) => {

    let price;

     if(props.discountedPrice) {
        price = 
        (   <>
                <span className="CrossedPrice">{'$' + props.price}</span>
                <span className="NewPrice">{"only $" + props.discountedPrice}</span>
            </>
        ) 
    } else price = <span>{'$' + props.price}</span>

    return (
        <div className='Product'>
            <p className="ProductName">{props.name}</p>
            <p>{price}</p>
            <Button onClick={props.updateCart} size='small' variant="contained" style={{
                marginBottom: '5px',
                fontWeight: '600'
                }}>Buy</Button>
        </div>
    )
}

export default Product;