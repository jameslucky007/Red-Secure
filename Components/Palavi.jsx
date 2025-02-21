import React from 'react'

const Palavi = () => {
  return (
    <>
         <div className="container my-5 blog-footer">
      <div className="contact-container shadow-lg p-4 bg-white rounded">
        
        {/* Logo Section */}
        <div className="text-center mb-3">
   
          <img src="/logo.png" alt="Red Secure Logo" width={160} height={100} />
        </div>

        {/* Contact Information */}
        <div className="row contact-info border p-3">
          <div className="col-md-6 text-start">
            <h5>Contact Us to know more!  Pallavi Chavan </h5><br />
            <a href="mailto:pallavi@redsecureme.com" className="email-link">
              pallavi@redsecureme.com
            </a>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-2">
            <h5>Red Secure IT Infrastructure LLC, Dubai</h5>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Palavi