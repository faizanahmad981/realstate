import React from 'react'; 
import '../header/index.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from '../../components/banner';

const CustomNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span>BUILD</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center nav-center">
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Agents</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
            </ul>

            <span className="navbar-text me-3">Other services</span>
            <a href="#" className="contact-us-btn">Contact Us</a>
          </div>
        </div>
      </nav>
      <Banner/>
     {/*   */}
    
    </>
  );
};

export default CustomNavbar;
