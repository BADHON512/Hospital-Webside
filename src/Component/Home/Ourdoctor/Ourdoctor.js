import React from 'react';
import d from '../../../images/d.jpg'
import CallIcon from '@mui/icons-material/Call';
import d2 from '../../../images/d2.jpg'
import d3 from '../../../images/d3.jpg'
import './Ourdoctor.css'

const Ourdoctor = () => {
    return (
        <div>
            <div className="hmm">
                <div className='mmp  text-center'>
                    <h2 style={{ color: '#14e125' }}>Our Doctor</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className=" w-75 row">
                        <div className="col-md-4">
                            <img className='bbl' src={d} alt="" />
                            <div className=" text-center">
                                <br />
                                <h5>Dr.badhon</h5>
                                <p> <CallIcon color='secondary' />+8801712124128</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img className='bbl' src={d} alt="" />
                            <div className=" text-center">
                                <br />
                                <h5>Dr.Shkib</h5>
                                <p> <CallIcon color='secondary' />+8801712124128</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img className='bbl' src={d} alt="" />
                            <div className=" text-center">
                                <br />
                                <h5>Dr.Raja</h5>
                                <p> <CallIcon color='secondary' />+8801712124128</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourdoctor;