import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../../SharedComponent/Navbar/Navbar';
import Badhon from './Badhon';






const DashbordClanderToAppointment = ({ calenderi }) => {
    return (
        <div>
      
            <div className="">
       
            </div>
            <h1>calendar to date {calenderi.length}</h1>  
            {
                calenderi.map(data => <Badhon all={data}></Badhon>)

            }
        </div>
    );
};

export default DashbordClanderToAppointment;