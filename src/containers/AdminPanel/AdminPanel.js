import React, { Component } from 'react';
import AdminPanelButton from '../../components/Navigation/AdminPanelButton/AdminPanelButton';
import HomeButton from '../../components/Navigation/HomeButton/HomeButton';
import ProductsInfo from '../../components/AdminPanelComponents/ProductsInfo/ProductsInfo';
import './AdminPanel.css';
import AdminPanelControls from '../../components/AdminPanelComponents/AdminPanelControls/AdminPanelControls';
import { db } from '../../firebase'; 

class AdminPanel extends Component {

    state = {
        products: null
    }

    addNewProduct = (name, price, discountedPrice) => {
        db.collection('products').add({
            name: name,
            price: price,
            discountedPrice: discountedPrice
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

    componentDidMount = () => {
        this.getProducts();
    }

    render() {
        return(
                <React.Fragment>
                    <HomeButton />
                    <AdminPanelButton />
                    <ProductsInfo products={this.state.products}/>
                    <header className='Title'>Welcome to the Admin Panel!</header>
                    <section className='InfoSection'>Here, you are able to create your own products and add them to the shop. Specify all of the properties below and click 'Add' to begin.</section>
                    <AdminPanelControls add={this.addNewProduct}/>
                </React.Fragment>
        )
    }
}

export default AdminPanel;