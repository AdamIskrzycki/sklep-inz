import React, { Component } from 'react';
import './AdminPanel.css';
import ProductsInfo from '../../components/AdminPanelComponents/ProductsInfo/ProductsInfo';
import AdminPanelControls from '../../components/AdminPanelComponents/AdminPanelControls/AdminPanelControls';
import Navigation from '../../components/Navigation/Navigation';
import { db } from '../../firebase'; 

class AdminPanel extends Component {

    state = {
        products: null
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
                    <Navigation />
                    <ProductsInfo products={this.state.products} delete={this.deleteProduct}/>
                    <header className='Title'>Welcome to the Admin Panel!</header>
                    <section className='InfoSection'>Here, you are able to create your own products and add them to the shop. Specify all of the properties below and click 'Add' to begin.</section>
                    <AdminPanelControls add={this.addNewProduct}/>
                </React.Fragment>
        )
    }
}

export default AdminPanel;