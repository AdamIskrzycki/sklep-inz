import React from 'react';

const CartProduct = (props) => {
    
    const groupBy = (list, keyGetter) => {

        const map = new Map();
        
        list.forEach((item) => {
             const key = keyGetter(item);
             const collection = map.get(key);
             if (!collection) {
                 map.set(key, [item]);
             } else {
                 collection.push(item);
             }
        });
        return map;
    }

    const grouped = groupBy(props.products, product => product.name);

    const getItemInfo = grouped.forEach((value, key, map) => {
 
            //console.log(value);
            console.log(` ${value[0].name} | $${value[0].price} | x${value.length}`)
      })

    // const productInfo = props.products.map((product, index) => {

    //     return (
    //     <>
    //         <div className="ProductInfo" key={product.index}>
    //             <span>{product.name + " | "}</span>
    //             <span>{product.discountedPrice ? product.discountedPrice + "$" : product.price + "$"}</span>
    //             <br/>
    //         </div>
    //     </>
    //      )
    // })

    return (
        <div>
            <span>{getItemInfo}</span>
        </div>
    );
}

export default CartProduct;