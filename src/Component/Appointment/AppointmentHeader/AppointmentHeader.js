import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import nwe from '../../../images/h12.jpg'
import './AppointmentHeader.css'

const AppointmentHeader = ({handeldate}) => {
    const [value, setvalue]=useState(new Date());
   
    return (
        <div>
            <div className="heder">
                <div className="row">
                    <div className=" col-md-5">
                     <div className="cal">
                     <h1 className='text-info'>Appointment Here</h1>
                     <br />
                        <Calendar
                            onChange={handeldate}
                            value={value}
                        />
                     </div>
                    </div>
                    <div className=" mam col-md-6">
                            <img className='img-fluid' src={nwe} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;