import React from 'react';
import '../realstate/index.css';

const RealStateSectionss = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>We are a global, boutique real <br /> estate brokerage</h1>
      </div>
      <div className="content row">
        <div className="text-content col-md-6">
          <h2>The transfer of real estate</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet <br/>sit pellentesque sollicitudin. Egestas faucibus lacus diam in<br/>
           senectus consectetur. Mattis elit adipiscing quisque tellus<br/> scelerisque vehicula ante nunc. Tellus consequat nisl quis<br/>
            nisl justo.
          </p>
          <div className="buttons">
            <button className="btn btn-dark">Book Now!</button>
            <button className="btn btn-outline-dark">Read More</button>
          </div>
          <div className="stats">
            <div className="stat">
              <h3>12+</h3>
              <p>Customers</p>
            </div>
            <div className="stat">
              <h3>14+</h3>
              <p>Offices</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Students</p>
            </div>
          </div>
        </div>
        <div className="image-content col-md-6">
          <img 
            alt="A man and a woman discussing something while looking at a laptop" 
            src="https://storage.googleapis.com/a1aa/image/FhXLz35xVNaeNqe6x49NdvpR7AUPkW5YwrXmQzyJAUf4oaHnA.jpg" 
            width="400"
          />
        </div>
      </div>
    </div>
  );
}

export default RealStateSectionss;
