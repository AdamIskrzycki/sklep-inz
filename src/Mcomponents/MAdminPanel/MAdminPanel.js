import React, { Component } from 'react';
import  { TextField } from '@material-ui/core';

class MAdminPanel extends Component {
    render() {
        return(
            <React.Fragment>
                <TextField label="Name" variant="outlined" />
                <TextField label="Price" variant="outlined" />
                <TextField label="Discounted Price (optional)" variant="outlined" />
            </React.Fragment>
        )
    } 
}

export default MAdminPanel