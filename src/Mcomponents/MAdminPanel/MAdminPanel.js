import React, { Component } from 'react';
import MAdminPanelControls from './MAdminPanelControls';
import MProdcutsInfo from './MProductsInfo';
import { db } from '../../firebase';

class MAdminPanel extends Component {

    state = {
        products: null,
    }

    addNewProduct = (name, price, discountedPrice) => {
        db.collection('products').add({
            name: name,
            price: +price,
            discountedPrice: +discountedPrice
        }); 

        this.getProducts();
    }
    
    getProducts = () => {
        db.collection('products').get().then( snapshot => {
            const updatedProducts = [];
            snapshot.forEach( doc => {
                const data = doc.data();
                updatedProducts.push({...data, id: doc.id});
            })
            
            this.setState({products: updatedProducts});
        })
    }

    deleteProduct = (id) => {
        db.collection('products').doc(id).delete().then(
            this.getProducts()
        );
    }

    componentDidMount = () => {
        this.getProducts();
    }

    render() {
      return(
            <React.Fragment>
                <MProdcutsInfo products={this.state.products} delete={this.deleteProduct}/>
                <MAdminPanelControls add={this.addNewProduct}/>
            </React.Fragment>
        )
    } 
}

export default MAdminPanel