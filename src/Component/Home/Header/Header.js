import React from 'react';
import Headermain from './Headermain/Headermain';
import Navbar from '../../SharedComponent/Navbar/Navbar';
import './header.css'
import Businessinfo from '../Businessinfo/Businessinfo';

const Header = () => {
    return (
        <div className='heder-container'>
            <Navbar></Navbar>
           <Headermain></Headermain>
           <Businessinfo></Businessinfo>
        </div>
    );
};

export default Header;