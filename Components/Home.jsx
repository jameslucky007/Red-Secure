import React from 'react';

const Home = () => {
  return (
    <div className="homebody">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-7" data-aos="fade-right">
            <div className="hometext">
              <h2 className="homeheadh5">Redsecure</h2>
              <h1 className="homeheadh1">UAE's Premier Cybersecurity & IT Management Company</h1>
              <p className="homeparagraph">
                Cybersecurity Products / Risk Assessment / IT Services
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 text-center" data-aos="fade-left">
            <img className="homeimg" src="homeimg.svg" alt="Cybersecurity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;