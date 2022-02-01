import React from 'react';
import { Link } from 'react-router-dom';
import Headermain from '../../Home/Header/Headermain/Headermain';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mrauto">
                            <li class="nav-item ">
                              <Link class='nav-link text-white' to='/'>Home</Link>
                               
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="Loginpage">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="#">Dental service</Link>
                            </li>
                          
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="#">Our Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="DashbordMain">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="#">Review</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="#Footer">Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;