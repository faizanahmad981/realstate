import React from 'react'; 
import '../header/header.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from '../../components/banner/index';
import Logo from '../../assets/images/Logo.svg';

const Header = () => {
  return (
   <div>
    <nav class="navbar navbar-expand-lg navbar-light">
     
        <img src={Logo} className='navbar-brand' />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
            <ul class=" navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Agents</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Listings</a>
                </li>
                <li class="nav-item">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
            </ul>
            {/*  <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Other services</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-outline-secondary" href="#">Contact us</a>
                </li>
            </ul>  */}
            <span className="navbar-text me-3">Other services</span>
            <a href="#" className="contact-us-btn">Contact Us</a>
        </div>
    </nav>


      <Banner/> 
   </div>
  );
};

export default Header;
