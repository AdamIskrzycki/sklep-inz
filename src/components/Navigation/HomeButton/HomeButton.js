import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const HomeButton = () => {
    return(
        <Link to='/'><Button size='small' variant='contained' style={{
            fontWeight: '600',
            position: 'absolute',
            marginLeft: '30%',
            display: 'inline-block'
        }}>Home</Button></Link>
    )
}

export default HomeButton;