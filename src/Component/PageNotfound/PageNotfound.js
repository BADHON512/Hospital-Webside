import React from 'react';
import picture from '../../images/dribbble_1.gif'
import Navbar from '../SharedComponent/Navbar/Navbar';

const PageNotfound = () => {
  
    return (
        <div>
            
            <Navbar></Navbar>
            <div className='text-center mt-5'> 
                <h1>Page not found </h1>
                 <img src={picture} alt="" />
            </div>
        </div>
    );
};

export default PageNotfound;