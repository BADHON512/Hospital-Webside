import React from 'react';
import fluoride from '../../../images/fluoride.png'
import treatment from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Serviceinfo from '../Serviceinfo/Serviceinfo';
import './Services.css'
const serviceinfo = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, suscipit?'
    },
    {
        name: 'Cavity Filing',
        img: treatment,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, suscipit?'
    },
    {
        name: 'Teath Whitening',
        img: whitening,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, suscipit?'
    },
]
const Services = () => {
    return (
        <div className='tata'>
           <div className='text-center'>
               <h4 style={{color:'green'}}>OUR SERVICES </h4>
               <br />
               <h2>SERVICES WE PROVIDE</h2>
           </div>
             <br />
            <div className='lname d-flex justify-content-center'>
                
                <div className='w-75 row'>
                    {
                        serviceinfo.map(data => <Serviceinfo servi={data}></Serviceinfo>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;