import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Thanks = () => {
  const [showCheck, setShowCheck] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Trigger animations sequentially
    setTimeout(() => setShowCheck(true), 300);
    setTimeout(() => setShowMessage(true), 800);
  }, []);

  return ( 

<div className="thank-you-section d-flex align-items-center justify-content-center " id='massage'>
  <div className="thank-you-card p-5 animate__animated animate__zoomIn">
    <div className="check-icon mb-4 animate__animated animate__bounceIn animate__delay-1s">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg>
    </div>
    
    <div className="text-center animate__animated animate__fadeInUp animate__delay-2s">
      <h2 className="gradient-text display-4 fw-bold mb-3">Thank You!</h2>
      <p className="text-muted fs-5 ">Your form has been successfully submitted</p>
      <Link href={'/'}> <button className=" button-87 " id='submit-card-btn'>  Back to Home</button></Link>
    </div>
  </div>
</div>
  );
};

export default Thanks;