import React from 'react';
import Testinfo from '../Testinfo/Testinfo';
import './Testimonial.css'
import people from '../../../images/people-1.png'
import people1 from '../../../images/people-2.png'
import people2 from '../../../images/people-3.png'
const cartinfo = [
    {
        name: 'DR. BADHON',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat cupiditate quis sint quas eos minima laudantium quasi voluptatem molestiae repellendus veritatis illum assumenda, eveniet modi soluta aspernatur, aliquid enim necessitatibus unde.',
        img: people,
        city:'Dhaka'
    },
    {
        name: 'DR. SANJIDA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat cupiditate quis sint quas eos minima laudantium quasi voluptatem molestiae repellendus veritatis illum assumenda, eveniet modi soluta aspernatur, aliquid enim necessitatibus unde.',
        img: people1,
        city:'capital'
    },
    {
        name: 'DR.RAJA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat cupiditate quis sint quas eos minima laudantium quasi voluptatem molestiae repellendus veritatis illum assumenda, eveniet modi soluta aspernatur, aliquid enim necessitatibus unde.',
        img: people2,
        city:'tangail'
    },
]
const Testimonial = () => {
    return (
        <div className='mt-5'>

            <div className='nam'>
                <h3 style={{ color: 'green' }}>TESTIMONIAL</h3>
                <br />
                <h1>What's Our Patients <br />Says</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75'>
                    {
                        cartinfo.map(data => <Testinfo cartinfo={data}></Testinfo>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Testimonial;