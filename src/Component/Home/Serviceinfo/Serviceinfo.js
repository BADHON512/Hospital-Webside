import React from 'react';
import './Serviceinfo.css'

const Serviceinfo = ({ servi }) => {
    return (
     
            <div className="col-md-4">
                
                 <img className='ma' src={servi.img} alt="" />
                 <br />
                    <h3  className='text-center'>{servi.name}</h3>
                    <br />
                    <p className='text-center'>{servi.description}</p>
                    
               
            </div>
        
    );
};

export default Serviceinfo;