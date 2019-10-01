import React from 'react';

const CartProduct = (props) => {

    const productInfo = props.products.map((product, index) => {

        return (
        <>
            <div className="ProductInfo" key={product.index}>
                <span>{product.name + " | "}</span>
                <span>{product.discountedPrice ? product.discountedPrice + "$" : product.price + "$"}</span>
                <br/>
            </div>
        </>
         )
    })

    return (
        <div>
            <span>{productInfo}</span>
        </div>
    );
}

export default CartProduct;