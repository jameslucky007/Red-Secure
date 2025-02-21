"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {  FaPhone,  FaEnvelope,  FaFacebookSquare,  FaInstagram,  FaLinkedin,  FaHome,  FaUser,  FaCartPlus,  FaBox,  FaBlogger,} from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const route = useRouter() // Detect Scroll to 
console.log(route);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  const navigateHandler = (originPath, destinationPath) =>{
    if(route.pathname === originPath){
      route.push("/").then(() => {
        scrollToSection(destinationPath);
      });
    }else{
      scrollToSection("products")
    }
  }


const iDNavHandler = (destinationPath)=>{
  if(route.pathname === '/blog#red-secure-vapt-services' || '/blog#cyber-security-vapt-infra' || '/blog#best-security-practices' || '/blog#cybersecurity-awareness' || '/blog#Avoid-Attacks'){
    route.push("/").then(() => {
      scrollToSection(destinationPath);
    });
  }else{
    scrollToSection(destinationPath)
  }
}



  return (
    <>
      {/* Upper Nav Strip */}
      <div className="uppernav" id="Home">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Social Icons */}
            <div className="col-md-3 col-12 text-center text-md-start mb-2 mb-md-0">
              <a
                href="https://www.facebook.com/redsecureme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="headicon" />
              </a>
              <a
                href="https://www.instagram.com/redsecureme/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="headicon" />
              </a>
              <a
                href="https://www.linkedin.com/company/redsecure-middle-east-llc/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="headicon" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 col-12 text-center text-md-end mb-2 mt-2">
              <ul className="navdetails">
                <Link href="https://wa.link/w6i1nj">
                  <li className="navlist">
                    <FaPhone /> | +971 50 948 3857
                  </li>
                </Link>
                <Link href="mailto:Sales@redsecureme.com">
                  <li className="navlist">
                    <FaEnvelope /> | Sales@redsecureme.com
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ Main Nav Bar ---------------- */}
      <nav   className={`navbar navbar-expand-lg mainhead ms-auto ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link href="/">
            <img className="logo ms-2" src="logo.png" alt="Logo" />
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler ms-auto"
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
          <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 allnav">
            <li className="nav-item">
  <Link href="/" className="nav-link nav-menu"><FaHome className="nav-icon" /> Home </Link>
</li>
              <li className="nav-item">
                <a className="nav-link nav-menu" onClick={() =>  iDNavHandler('about')}>
                  <FaUser className="nav-icon" /> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu" onClick={() =>  iDNavHandler('services')}>
                  <FaCartPlus className="nav-icon" /> Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu" onClick={()=> navigateHandler('/blog', 'products')}>
                  <FaBox className="nav-icon" /> Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu" onClick={() => iDNavHandler('blogs')}>
                  <FaBlogger className="nav-icon" /> Blogs
                </a>
              </li>
            </ul>

            {/* Contact Button */}
            <a onClick={() => iDNavHandler('contact')}>  <button className="button-87">Contact</button></a>  
              </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
