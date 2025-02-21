import React from 'react'
import Navbar from './Navbar'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div>{children}</div>
    <Footer/>
    <FloatingWhatsApp
        accountName='Red Secure'
       phoneNumber='+971 50 948 3857' 
       avatar='/tabicon.png'
    />
    </>
  )
}

export default Layout