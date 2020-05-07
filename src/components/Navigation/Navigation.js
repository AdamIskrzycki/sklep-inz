import React from 'react';
import AdminPanelButton from './AdminPanelButton/AdminPanelButton';
import HomeButton from './HomeButton/HomeButton';



const Navigation = () => {
    return (
        <React.Fragment>
            <HomeButton />
            <AdminPanelButton />
        </React.Fragment>
    )
}

export default Navigation;
