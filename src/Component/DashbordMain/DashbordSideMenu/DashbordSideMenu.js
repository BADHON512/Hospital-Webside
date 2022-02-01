import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCardIcon from '@mui/icons-material/AddCard';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SettingsIcon from '@mui/icons-material/Settings';
import './DashbordSideMenu.css'

const DashbordSideMenu = () => {
    return (
        <div className='back'>
            <div className="side ">
                <h5> <DashboardIcon/> Dashbord</h5>
                <h5><AddCardIcon/> Appointment</h5>
                <h5> <AirlineSeatReclineExtraIcon/>Patients</h5>
                <h5><AddCommentIcon/> Prescription</h5>
                <h5> <SettingsIcon/>Setting</h5>
                
            </div>
        </div>
    );
};

export default DashbordSideMenu;