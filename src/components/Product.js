import React from 'react';



const product = (props) => {
    
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.discountedPrice ? props.discountedPrice : props.price }</p>
            <button onClick={props.addToCart}>Buy</button>
        </div>
    )
}

export default product;