import React, {Component} from 'react';
import './AdminPanelControls.css';
import { Button } from '@material-ui/core';


class AdminPanelControls extends Component {
    
    state = {
        products: null,
        name: '',
        price: null,
        discountedPrice: null
    }

    onInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({ [name]: value });
    }

    clearInputs = () => {
        this.setState({name: '', price: null, discountedPrice: null})
        this.props.add(this.state.name, Number(this.state.price), Number(this.state.discountedPrice));
    }
    

    render() {
          
    return (
            <React.Fragment>
                <div className='AdminPanelControls'>
                    <section>
                        <p className='ControlTitle'>Name</p>
                        <input type='text' name='name' onChange={this.onInputChange}></input>
                    </section>
                    <section>
                        <p className='ControlTitle'>Price</p>
                        <input type='number' name='price' step='0.01' min='0.01' onChange={this.onInputChange}></input>
                    </section>
                    <section>
                        <p className='ControlTitle'>Discounted Price</p>
                        <input type='number' name='discountedPrice' step='0.01' min='0.01' onChange={this.onInputChange}></input>
                    </section>

                    <Button onClick={this.clearInputs} variant='contained' size='small' style={{
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