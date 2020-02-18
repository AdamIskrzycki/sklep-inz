 import React from 'react';
 import './ClearCartButton.css'

 const ClearCartButton = (props) => {
    return (
        <button className="ClearCartButton" onClick={props.clicked}>CLEAR CART</button>
    );
 }

 export default ClearCartButton;