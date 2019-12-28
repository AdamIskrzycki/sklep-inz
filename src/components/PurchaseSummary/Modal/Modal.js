import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

class Modal extends Component {

    componentDidMount() {
        console.log("Modal mounted");
    }

    render() {
        return (
            <>
                <Backdrop/>
                <div className={classes.Modal}>
                </div>
            </>
        );
    }
}

export default Modal;