import React from 'react'
import Link from 'next/link';
import {FaPhone, FaEnvelope,FaFacebookSquare,FaInstagram,FaLinkedin,FaHome,FaUser,FaCartPlus,FaBox,FaBlogger  } from "react-icons/fa";





const Navbar = () => {
  return (
    <>

{/* Upper Nav Strip */}

<div className="uppernav" id="Home">
      <div className="container">
        <div className="row align-items-center justify-content-between ">

          {/* Social Icons */}
          <div className="col-md-3 col-12 text-center text-md-start mb-2 mb-md-0">
            <a href="https://www.facebook.com/redsecureme/" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="headicon" />
            </a>
            <a href="https://www.instagram.com/redsecureme/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="headicon" />
            </a>
            <a href="https://www.linkedin.com/company/redsecure-middle-east-llc/about/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="headicon" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-12 text-center text-md-end">
            <ul className="navdetails">
              <li className="navlist">
                <FaPhone /> | +971 50 948 3857
              </li>
              <li className="navlist">
                <FaEnvelope /> | Sales@redsecureme.com
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

{/* ------------ Main Nav Bar ---------------- */}

<nav className="navbar navbar-expand-lg bg-body-tertiary mainhead">
      <div className="container">
        <Link href={"/"}>
          <img className="logo" src="logo.png" alt="Logo" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 allnav">
            <li className="nav-item">
              <a className="nav-link nav-menu" href="#">
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-menu" href="#">
                <FaUser className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-menu" href="#">
                <FaCartPlus className="nav-icon" /> Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-menu" href="#">
                <FaBox className="nav-icon" /> Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-menu" href="#">
                <FaBlogger className="nav-icon" /> Blogs
              </a>
            </li>
          </ul>

          {/* Contact Button */}
          <button className="button-87">Contact</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar