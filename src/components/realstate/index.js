import React from 'react';
import '../realstate/index.css';

const RealStateSectionss = () => {
  return (
   <>
    <div className="headers">
        <h1>We are a global, boutique real estate brokerage</h1>
    </div>
    <div className="content">
        <div className="text-section">
            <h2>The transfer of real estate</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet et <br/>
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus <br/>
              consectetur. Mattis est adipiscing quisque tellus scelerisque vehicula<br/>
               ante nunc. Tellus consequat nisi quis nisi justo.</p>
            <div className="buttons">
                <button className="btn btn-dark">Book Now</button>
                <button className="btn btn-outline-dark">Read More</button>
            </div>
            <div className="stats">
                <div>
                    <h3>12+</h3>
                    <p>Customers</p>
                </div>
                <div>
                    <h3>14+</h3>
                    <p>Offices</p>
                </div>
                <div>
                    <h3>10+</h3>
                    <p>Students</p>
                </div>
            </div>
        </div>
        <div className="image-section">
            <img src="https://storage.googleapis.com/a1aa/image/FhXLz35xVNaeNqe6x49NdvpR7AUPkW5YwrXmQzyJAUf4oaHnA.jpg"   alt="A man and a woman discussing something while looking at a laptop"/>
        </div>
    </div>
   </>
  );
}

export default RealStateSectionss;
