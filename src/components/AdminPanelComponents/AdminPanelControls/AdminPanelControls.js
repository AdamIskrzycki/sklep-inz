import React from 'react';
import './AdminPanelControls.css';
import { Button } from '@material-ui/core';


const AdminPanelControls = () => {
    return (
        <React.Fragment>
            <div className='AdminPanelControls'>
                <section>
                    <p className='ControlTitle'>Name</p>
                    <input type='text' name='name'></input>
                </section>
                <section>
                    <p className='ControlTitle'>Price</p>
                    <input type='number' name='price' step='0.01'></input>
                </section>
                <section>
                    <p className='ControlTitle'>Discounted Price</p>
                    <input type='number' name='discounted price' step='0.01'></input>
                </section>

                <Button variant='contained' size='small' style={{
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

export default AdminPanelControls;