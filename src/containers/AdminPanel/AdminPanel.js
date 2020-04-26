import React, { Component } from 'react';
import AdminPanelButton from '../../components/Navigation/AdminPanelButton/AdminPanelButton';
import HomeButton from '../../components/Navigation/HomeButton/HomeButton';
import './AdminPanel.css';

class AdminPanel extends Component {
    render() {
        return(
                <React.Fragment>
                    <HomeButton />
                    <AdminPanelButton />
                    <header className='Title'>Welcome to the Admin Panel!</header>
                </React.Fragment>
        )
    }
}

export default AdminPanel;