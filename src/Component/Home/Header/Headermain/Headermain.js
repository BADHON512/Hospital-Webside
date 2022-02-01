import { Button,} from '@mui/material';
import React from 'react';
import chair from '../../../../images/chair.png'
import { Link } from 'react-router-dom';

const Headermain = () => {
    return (
        <main  style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1" >
                <h1 style={{color:"#3A4256"}}>Your New Smile <br /> Starts Here</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora dolore maxime, voluptas laudantium corporis alias nobis itaque amet consequatur magnam laborum quod reprehenderit perspiciatis?.</p>
                <br />
                <div>
                <Link to='appointment'><Button variant='contained' color='success'>GET APPOINTMENT</Button></Link>
                </div>

            </div>
            <div className="col-md-6">
                <img class='img-fluid' src={chair} alt="" />
            </div>
        </main>
    );
};

export default Headermain;