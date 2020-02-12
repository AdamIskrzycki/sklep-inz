import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
import CartProduct from '../../Cart/CartProduct';
import BackButton from '../Modal/Buttons/BackButton/BackButton';
import CheckoutButton from '../Modal/Buttons/CheckoutButton/CheckoutButton';
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
                    <CheckoutButton/>
                    <BackButton clicked={this.props.modalClosed}/>
                </div>
            </>
        );
    }
}

export default Modal;