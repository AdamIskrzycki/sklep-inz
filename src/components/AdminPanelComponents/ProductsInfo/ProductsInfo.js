import React from 'react';
import './ProductsInfo.css';
import { Button } from '@material-ui/core';


const ProductsInfo = (props) => {
    return (
        <React.Fragment>
            <div className='ProductsInfo'>
                <h2>Current stock:</h2>
                <span className='Caption'>Name | Price | Discounted Price</span>
                <ul className='CurrentStock'>
                    {props.products && props.products.map(product => {
                        return (
                        <li>
                            {product.name} | ${product.price} {product.discountedPrice ? ' | $' + product.discountedPrice : null}
                            <Button onClick={() => props.delete(product.id)} variant='contained' size='small' style={{
                                fontSize: '10px',
                                marginLeft: '20px'
                                }}>Delete</Button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ProductsInfo;