import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const AdminPanelButton = () => {
    return(
        <Link to='/admin'><Button size='small' variant='contained' style={{
            fontWeight: '600',
            position: 'absolute',
            marginLeft: '35%',
            display: 'inline-block'
        }}>Admin Panel</Button></Link>
    )
}

export default AdminPanelButton;