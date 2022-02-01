import React from 'react';
import './Exceptional.css'
import Treatment from '../../../images/treatment.png'
import { Button } from '@mui/material';

const Exceptional = () => {
    return (
        <div className=' d-flex lala mt-5  justify-content-center '>
            <div className='row w-75'>
                <div className='col-md-5'>
                    <div className='ggl'>
                        <img className='img-fluid' src={Treatment} alt="" />
                    </div>

                </div>
                <div className=' col-md-7 align-self-center text-start'>
                    <h2>EXCEPTIONAL DENTAL <br /> CARE, ON YOUR TERMS</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem laboriosam impedit at iure consequatur. Laborum consequatur fugiat vel a quod exercitationem illo, pariatur omnis! Doloremque voluptas accusamus odit possimus inventore ullam eos molestiae non est pariatur similique ad accusantium nisi, exercitationem at natus placeat obcaecati omnis eius velit ab.</p>
                    <br />
                    <Button variant='contained' color='secondary'>Learn :) more</Button>
                </div>




            </div>
        </div>
    );
};

export default Exceptional;