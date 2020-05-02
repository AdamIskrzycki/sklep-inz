import React, {Component} from 'react';
import './AdminPanelControls.css';
import { Button } from '@material-ui/core';


class AdminPanelControls extends Component {
    
    state = {
        products: null,
        name: '',
        price: '',
        discountedPrice: '',
        isInputEmpty: true
    }

    onInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({ [name]: value , isInputEmpty: false});
    }

    clearInputs = () => {
        this.props.add(this.state.name, this.state.price, this.state.discountedPrice);
        this.setState({name: '', price: '', discountedPrice: '', isInputEmpty: true});
    }
    

    render() {
          
    return (
            <React.Fragment>
                <div className='AdminPanelControls'>
                    <section>
                        <p className='ControlTitle'>Name</p>
                        <input type='text' name='name' onChange={this.onInputChange} value={this.state.name}></input>
                    </section>
                    <section>
                        <p className='ControlTitle'>Price</p>
                        <input type='number' name='price' step='0.01' min='0.01' onChange={this.onInputChange} value={this.state.price}></input>
                    </section>
                    <section>
                        <p className='ControlTitle'>Discounted Price</p>
                        <input type='number' name='discountedPrice' step='0.01' min='0.01' onChange={this.onInputChange} value={this.state.discountedPrice}></input>
                    </section>

                    <Button disabled={this.state.isInputEmpty} onClick={this.clearInputs} variant='contained' size='small' style={{
                        fontWeight: '600',
                        display: 'flex',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '40px'
                        }}>Add</Button>

                </div>
        </React.Fragment>
        ); 
    }
}

export default AdminPanelControls;