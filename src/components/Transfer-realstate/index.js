import React from 'react';
import '../Transfer-realstate/index.css';
import realstate from '../../assets/images/realstate.svg'
const RealEstateSection = () => {
  return (
    <section className="real-estate-section container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 col-md-12">
          <h1 className="main-heading">We are a global, boutique real estate brokerage</h1>
          <h4 className="sub-heading">The transfer of real estate</h4>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet et pellentesque sollicitudin. Egestas faucibus lacus diam in
            senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisi justo.
          </p>
          <div className="button-group">
            <button className="btn btn-dark btn-lg">Book Now!</button>
            <button className="btn btn-outline-dark btn-lg ms-3">Read More</button>
          </div>
          {/* Statistics */}
          <div className="stats mt-4">
            <div className="stat-item">
              <h2>12+</h2>
              <p>Customers</p>
            </div>
            <div className="stat-item">
              <h2>14+</h2>
              <p>Offices</p>
            </div>
            <div className="stat-item">
              <h2>10+</h2>
              <p>Students</p>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src={realstate}
            alt="Real estate team"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
