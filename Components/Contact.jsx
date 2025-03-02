import React from 'react';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      {/* Contact Us Page Section */}
      <div className="contact-body" id="contact">
        <div className="container" data-aos="flip-left">
          <h2 className="contact-header">
            <FaCaretLeft className="product-bars" />
            Contact Us
            <FaCaretRight className="product-bars" />
          </h2>
          <div className="row">
            
            {/* Left Side - Contact Form */}
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="left-container">
                <form action={'/thank-you'} name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="subject" value="You got a new message" />
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="mb-3">
                    <label className="form-label" htmlFor="full-name">Name:</label>
                    <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Full Name" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="mobile">Phone No:</label>
                    <input type="number" id="mobile" name="mobile" className="form-control" placeholder="Phone No with Country Code" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">Message:</label>
                    <textarea id="message" className="form-control" name="message" rows="4" placeholder="Your Message" required></textarea>
                  </div>

                  <button type="submit" className="contact-btn" aria-label="Submit Form">Submit</button>
                </form>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="right-container">
                <h2 className="container-head">Get in Touch</h2>

                <div className="list-icon">
                  <iconify-icon icon="mdi:location-radius" className="contact-icon"></iconify-icon>
                  <h3 className="right-text">Address: RedSecure Middle East HQ, Al Fajer complex, 1st Floor Office - 105, Oud Metha Dubai, UAE</h3>
                </div>

                <div className="list-icon">
                  <iconify-icon icon="mdi:phone" className="contact-icon"></iconify-icon>
                  <h3 className="right-text">Phone No: +971 50 948 3857, +971 43 426 284</h3>
                </div>

                <Link href="mailto:Sales@redsecureme.com">
                  <div className="list-icon">
                    <iconify-icon icon="mdi:email-outline" className="contact-icon"></iconify-icon>
                    <h3 className="right-text">Email: Sales@redsecureme.com</h3>
                  </div>
                </Link>

                <div className="list-icon">
                  <iconify-icon icon="mdi:question-mark" className="contact-icon"></iconify-icon>
                  <h3 className="right-text">Have Questions? Contact Us!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
