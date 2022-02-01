import React from 'react';
import Appointment from '../Appointment/Appointment';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../../SharedComponent/Footer/Footer';
import Header from '../Header/Header';
import Ourblog from '../Ourblog/Ourblog';
import Ourdoctor from '../Ourdoctor/Ourdoctor';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Header></Header> 
           <Services></Services>
           <Exceptional></Exceptional>
           <Appointment></Appointment>
           <Testimonial></Testimonial>
           <Ourblog></Ourblog>
           <Ourdoctor></Ourdoctor>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;