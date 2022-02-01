import React, { useState } from 'react';
import Navbar from '../../SharedComponent/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableTime from '../AvailableTime/AvailableTime';
import Footer from '../../SharedComponent/Footer/Footer'

const Appointment = () => {
    const [value, setvalue]=useState(new Date());
    const handeldate =date=>{
       console.log(date)
       setvalue(date)
    }
    return (
        <div>
           <Navbar></Navbar>
           <AppointmentHeader handeldate={handeldate} ></AppointmentHeader>
           <AvailableTime date={value}></AvailableTime>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;