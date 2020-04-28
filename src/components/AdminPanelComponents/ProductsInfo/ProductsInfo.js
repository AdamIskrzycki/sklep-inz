import React from 'react';
import './ProductsInfo.css';

const ProductsInfo = (props) => {
    return (
        <React.Fragment>
            <div className='ProductsInfo'>
                <h2>Current stock:</h2>
                <ul>
                    {props.products && props.products.map(product => {
                        return (
                        <li>{product.name}  {product.price}</li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ProductsInfo;