import React, { Component } from 'react';
import  { TextField, Button, Container, withStyles, Typography } from '@material-ui/core';


const styles = theme => ({
    addButton: {
        fontWeight: '500',
        display: 'flex',
        margin: 'auto',
        marginLeft: '40%',
        marginTop: theme.spacing(2),
        width: '15%'
    },
    container: {
        marginTop: theme.spacing(25),
    },

    textField: {
        width: '30%',
        margin: '3px',
        marginTop: theme.spacing(6)
    }
})


class MAdminPanelControls extends Component {

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
        document.getElementById('focus').focus();
    }

    render() {

        const { classes } = this.props

        const inputPropsName = {
            //value: this.state.name,
            //onChange: this.onInputChange
        }

        const inputPropsPrice = {
            value: this.state.price,
            onChange: this.onInputChange
        }

        const inputPropsDiscountedPrice = {
            value: this.state.discountedPrice,
            onChange: this.onInputChange
        }

        return(
            <React.Fragment>
                <Container maxWidth='sm' className={classes.container}>
                    <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>Welcome to the Admin Panel</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraphvariant="h5" paragraph>Please specify the properties below in order to add a new product to the stock.</Typography>
                    <TextField inputProps={inputPropsName}  id='focus' label="Name" variant="outlined" className={classes.textField} autoFocus/>
                    <TextField inputProps={inputPropsPrice} type='number' label="Price" variant="outlined" className={classes.textField}/>
                    <TextField inputProps={inputPropsDiscountedPrice} type='number' label="Discounted Price (optional)" variant="outlined" className={classes.textField}/>
                    <Button variant='contained' color='primary' className={classes.addButton} onClick={this.clearInputs}>ADD</Button>
                </Container>

            </React.Fragment>
        )
    } 
}

export default withStyles(styles)(MAdminPanelControls)