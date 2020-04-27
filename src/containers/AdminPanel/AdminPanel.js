import React, { Component } from 'react';
import AdminPanelButton from '../../components/Navigation/AdminPanelButton/AdminPanelButton';
import HomeButton from '../../components/Navigation/HomeButton/HomeButton';
import ProductsInfo from '../../components/AdminPanelComponents/ProductsInfo/ProductsInfo';
import { db } from '../../firebase';
import './AdminPanel.css';
import AdminPanelControls from '../../components/AdminPanelComponents/AdminPanelControls/AdminPanelControls';

class AdminPanel extends Component {

    state = {
        products: null
    }

    componentDidMount () {
        db.collection('products').get().then( snapshot => {
            const updatedProducts = [];
            snapshot.forEach( doc => {
                const data = doc.data();
                updatedProducts.push({...data, id: doc.id});
            })
            this.setState({products: updatedProducts});
        })
    } 

    render() {
        return(
                <React.Fragment>
                    <HomeButton />
                    <AdminPanelButton />
                    <ProductsInfo />
                    <header className='Title'>Welcome to the Admin Panel!</header>
                    <section className='InfoSection'>Here, you are able to create your own products and add them to the shop. Specify all of the properties below and click 'Add' to begin.</section>
                    <AdminPanelControls />
                </React.Fragment>
        )
    }
}

export default AdminPanel;