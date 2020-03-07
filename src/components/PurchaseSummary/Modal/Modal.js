import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
import CartProduct from '../../Cart/CartProduct';
import { Button } from '@material-ui/core';
import './Buttons/BackButton.css';
import './Buttons/CheckoutButton.css';

class Modal extends Component {

    render() {

        const totalPrice = this.props.products.reduce((acc, product) => product.discountedPrice ? acc + product.discountedPrice : acc + product.price, 0);

        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <h1 className="ModalHeader">YOUR ORDER</h1>
                    <div className="YourOrder">
                        <CartProduct products={this.props.products}/>
                        <p>{"Total price: " + totalPrice.toFixed(2) + "$"}</p>
                    </div>
                    <Button onClick={this.props.continueToCheckout} variant="contained" className="CheckoutButton">Checkout</Button>
                    <Button onClick={this.props.modalClosed} variant="contained" className="BackButton">Back</Button>
                </div>
            </>
        );
    }
}

export default Modal;