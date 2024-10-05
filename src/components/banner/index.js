import React from 'react'
import '../banner/banner.css';
import bannerimg from '../../assets/images/home.svg';
const banner = () => {
  return (
    <div className="containerbanner">
    <div className="content">
      <div className="text-section">
        <p>Welcome to Realstate</p>
        <h1>Manage Your Property</h1>
        <p>
          You will have everything nearby: supermarket, buses, station, the Carmen neighborhood, etc.
        </p>
        <div className="input-group">
          <input className="form-control" placeholder="Enter your email" type="email" />
          <button className="btn btn-dark">Get a Quote</button>
        </div>
      </div>
      <div className="image-section-banner">
        <img
          className='imgcircle-banner'
          alt="Modern house with multiple levels, large windows, and surrounding greenery"
          src={bannerimg}
        />
      </div>
    </div>
  </div>
  )
}

export default banner;

