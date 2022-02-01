import { Button } from '@mui/material';
import React from 'react';
import './Appointment.css'
import doctor from '../../../images/doctor.png'



const Appointment = () => {
    return (
        <div className='appointment '>
           <div className="container">
           <div className=' hmm row text-start' >
                <div className='cray lomba col-md-5 '>
                        <img className=' img-fluid' src={doctor} alt="" />
                </div>
                <div className='cray col-md-7 text-white align-self-center'>
                   <h3 style={{color:'fuchsia'}}>APPOINTMENT</h3>
                   <br />
                   <h2>Make an appointment tody</h2>
                   
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia excepturi labore, laboriosam magnam nulla optio?</p>
                   
                   <Button variant='contained' color='info'>Get :) more</Button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Appointment;