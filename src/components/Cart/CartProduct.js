import React from 'react';

const CartProduct = (props) => {
    
    const groupBy = (arr) => {


        const productsFilter = arr.find(({name}) => {
                return name;
        })

        let includesItem = arr.some(product => product.name === productsFilter);    // arr.includes(productsFilter) ??

        const filledCart = arr.map(item => {
            if(!includesItem) {
                arr.push(item);
                productsFilter['count'] = '1';
            }

            else productsFilter['count']++
        })
            

       

        // productsFilter.map((item) => {
        //     return item['count']++
        // })

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

        return arr;     // jak zwracam filledCart to się nie kompiluje
    }

    const grouped = groupBy(props.products);
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