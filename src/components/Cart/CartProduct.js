import React from 'react';

const CartProduct = (props) => {
    
    const groupBy = (list, key) => {

        const map = [];

        list.forEach((item) => {
            const collection = map.find(elem => elem[key] === item[key]);
            if(!collection) {
                item.count = 1;
                map.push(item);
            } else {
                collection.count++;
            }
        });

        // const map = new Map();
        
        // list.forEach((item) => {
        //      const key = keyGetter(item);
        //      const collection = map.get(key);
        //      if (!collection) {
        //          map.set(key, [item]);
        //      } else {
        //          collection.push(item);
        //      }
        // });
        // return map;

        return map;
    }

    const grouped = groupBy(props.products, 'name');
    console.log(grouped);

    const getItemInfo = grouped.map((product) => {
        return (
            <>
                <div className="ProductInfo" key={product.id}>
                    <span>{product.name + " | "}</span>
                    <span>{product.discountedPrice ? product.discountedPrice + "$" : product.price + "$"}</span>
                    <span>{' | x' + product.count}</span>
                    <br/>
                </div>
            </>
             )
      })


    return (
        <div>
            <span>{getItemInfo}</span>
        </div>
    );
}

export default CartProduct;