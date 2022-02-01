import React, { useState } from 'react';
import DashbordClander from './DashbordClander/DashbordClander';
import DashbordClanderToAppointment from './DashbordClanderToAppointment/DashbordClanderToAppointment';
import DashbordSideMenu from './DashbordSideMenu/DashbordSideMenu';
import Calendar from 'react-calendar';
import Navbar from '../SharedComponent/Navbar/Navbar';

const DashbordMain = () => {
    const [value, onChange] = useState(new Date());
    const [ad, setad] = useState([])
    console.log(ad)


    const handeldate = (selectTime) => {
        onChange(selectTime)

        selectTime = selectTime.toDateString()



        fetch('http://localhost:4000/appointmentbydate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ selectTime })
        })
            .then(res => res.json())
            .then(data => setad(data))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                    <DashbordSideMenu></DashbordSideMenu>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handeldate}
                        value={value}
                    />
                </div>
                <div className="col-md-5">
                    <DashbordClanderToAppointment calenderi={ad}></DashbordClanderToAppointment>
                </div>
            </div>
        </div>
    );
};

export default DashbordMain;