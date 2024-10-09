import React from 'react';
import '../newsletter/index.css';
import bannerimg from '../../assets/images/newsletter.svg';

const Newsletter = () => {
    return (
        <div className="containerbanners">
            <div className="contents">
                <div className="text-sections">
                    <h1>Subscribe Our Newsletter</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit <br/>
                        pellentesque sollicitudin. Egestas faucibus lacus diam in senectus<br/>
                        consectetur. Mattis elit adipiscing quisque tellus scelerisque<br/>
                        vehicula ante nunc.
                    </p>
                    <div className="input-group">
                        <input className="form-control" placeholder="Enter your email" type="email" />
                        <button className="btn btn-dark">Get a Quote</button>
                    </div>
                </div>
                <div className="image-sections">
                    <img
                        className='imgcircles'
                        alt="Modern building with surrounding greenery"
                        src={bannerimg}
                    />
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
