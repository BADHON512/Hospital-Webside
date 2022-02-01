import { Button } from '@mui/material';
import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import ManIcon from '@mui/icons-material/Man';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

const Footer = () => {
    return (
        <div id='Footer' className="clo">
            <div className='footer'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="hell">

                        </div>
                        <div className="lst">

                            <li>Emergency Dental Care</li>
                            <li>Check Up</li>
                            <li>Treatment of personal Diseases</li>
                            <li>Tooth Extraction</li>
                            <li>Check +-</li>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="">
                            <a href="Services">Services</a>
                        </div>
                        <div className="kl">

                            <li>Whole abdomen</li>
                            <li>Pregnancy prifile</li>
                            <li>Thyroid gland breast</li>
                            <li>Musculoskeletal</li>
                            <li>Homeopathic Materia me</li>
                            <li>Potency Solution Prepared</li>
                            <li>Ingredients (distilled aqua & others</li>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="">
                            <a href="Oral Health">Oral Health</a>
                        </div>
                        <div className="kl">

                            <li>Whole abdomen</li>
                            <li>Pregnancy prifile</li>
                            <li>Thyroid gland breast</li>
                            <li>Musculoskeletal</li>
                            <li>Homeopathic Materia me</li>
                            <li>Potency Solution Prepared</li>
                            <li>Ingredients (distilled aqua & others</li>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <a href="Our Address">Our Address</a>
                        </div>
                        <div className="kl">
                            <h6>Postkamary Nagarpur Tangail 1936</h6>
                            <div className='mmd'>
                                <div className='xx' >
                                    <FacebookIcon className='mlt' variant='contained' color='info' />
                                    <GoogleIcon className='mlt' variant='contained' color='secondary'></GoogleIcon>
                                    <InstagramIcon className='mlt' variant='contained' color='primary'></InstagramIcon>
                                    <HealthAndSafetyIcon className='mlt' variant='contained' color='success'></HealthAndSafetyIcon>
                                    <ManIcon className='mlt' variant='contained' color='warning'></ManIcon>
                                </div>
                            </div>
                            <div className="mmd">

                                <h6>Call Now</h6>

                                <Button variant='contained' color='info'><PhoneForwardedIcon/> +8801712124128</Button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;