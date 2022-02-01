import React from 'react';
import Businfo from '../Businfo/Businfo'
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const business=[{

     title:'Opening hours',
    description:'start time 7am and closed section',
    icon:faClock,
    background:'primary'
    

},
{
    title:'Call us',
    description:' +01712124128',
    icon:faMapMarker,
    background:'dark'
},
{
   title:'Visit Our location',
    description:'America New york ',
    icon:faPhone,
    background:'primary'
},

]


const Businessinfo = () => {
    return (
        <section className='d-flex justify-content-center'>
           <div className='w-75  row '>
           {
               business.map(data=><Businfo buinfo={data}></Businfo>) 
            }
           </div>
            
        </section>
    );
};

export default Businessinfo;