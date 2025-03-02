import React, { useState } from 'react';
import Navbar from './Navbar';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />

      {/* WhatsApp Chatbox with Improved Accessibility */}
      <div
        className={!chatVisible ? 'hidden-chatbox' : ''}
        aria-hidden={!chatVisible}
        tabIndex={!chatVisible ? '-1' : '0'}
      >
        <FloatingWhatsApp
          accountName="Red Secure"
          phoneNumber="+971 50 948 3857"
          avatar="/tabicon.png"
          onClick={() => setChatVisible(true)} // Show chatbox when clicked
        />
      </div>
    </>
  );
};

export default Layout;
