import React from 'react';
import '../steps/index.css'; 
import message from '../../assets/images/messages.svg';
import edit from '../../assets/images/edit-2.svg';
import tracking from '../../assets/images/sms-tracking.jpg';

const Steps = () => {
  return (
    <section className="steps-section py-5 text-center">
      <div className="containerstep">
        <div className="center-contents text-center">
          <p className="text-muted mb-2">Three steps. Three minutes.</p>
          <h2 className="font-weight-bold">Everything should be this easy.</h2>
        </div>

        <div className="row text-center mt-5">
          <div className="col-md-4">
            <div className="step">
              <div className="icon mb-3">
                <img src={message} alt="Answer questions" />
              </div>
              <h5 className="font-weight-bold">Answer questions</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur.<br/> Adipiscing imperdiet bibendum in in<br/> vestibulum.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step">
              <div className="icon mb-3">
                <img src={tracking} alt="Select a quote" />
              </div>
              <h5 className="font-weight-bold">Select a quote</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur.<br/> Adipiscing imperdiet bibendum in in<br/> vestibulum.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step">
              <div className="icon mb-3">
                <img src={edit} alt="Get registered" />
              </div>
              <h5 className="font-weight-bold">Get registered</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur.<br/> Adipiscing imperdiet bibendum in in<br/> vestibulum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
