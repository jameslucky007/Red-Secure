"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  
  FaPhone, FaEnvelope, FaFacebookSquare, FaInstagram, FaLinkedin, 
  FaHome, FaUser, FaCartPlus, FaBox, FaBlogger 
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false); // Close menu on click
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  // Function to handle internal navigation
  const navigateHandler = (destinationPath) => {
    if (window.location.pathname === "/") {
      scrollToSection(destinationPath);
    } else {
      router.push("/").then(() => scrollToSection(destinationPath));
    }
  };

  return (
    <>
      {/* Upper Nav Strip */}
      <div className="uppernav" id="Home">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Social Icons */}
            <div className="col-md-3 col-12 text-center text-md-start mb-md-0">
              <div className="social-icons">
                <a href="https://www.facebook.com/redsecureme/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare className="headicon" />
                </a>
                <a href="https://www.instagram.com/redsecureme/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="headicon" />
                </a>
                <a href="https://www.linkedin.com/company/redsecure-middle-east-llc/about/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="headicon" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 col-12 text-md-end mb-2 mt-2">
              <ul className="navdetails">
                <li className="navlist">
                  <a href="https://wa.link/w6i1nj">
                    <FaPhone /> | +971 50 948 3857
                  </a>
                </li>
                <li className="navlist">
                  <a href="mailto:Sales@redsecureme.com">
                    <FaEnvelope /> | Sales@redsecureme.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className={`navbar navbar-expand-lg mainhead ms-auto ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link href="/" passHref>
            <Image
              className="logo ms-2 img-fluid"
              src="/logo.webp"  
              alt="Logo"
              width={120}  
              height={50}  
              priority  
            />
          </Link>

          {/* Hamburger Button with Animation */}
          <button
            className={`navbar-toggler ms-auto ${isMenuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ms-auto ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 allnav">
              <li className="nav-item">
                <Link href="/" className="nav-link nav-menu" onClick={() => navigateHandler("Home")}>
                  <FaHome className="nav-icon" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#about" className="nav-link nav-menu" onClick={() => navigateHandler("about")}>
                  <FaUser className="nav-icon" /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#services" className="nav-link nav-menu" onClick={() => navigateHandler("services")}>
                  <FaCartPlus className="nav-icon" /> Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#products" className="nav-link nav-menu" onClick={() => navigateHandler("products")}>
                  <FaBox className="nav-icon" /> Products
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#blogs" className="nav-link nav-menu" onClick={() => navigateHandler("blogs")}>
                  <FaBlogger className="nav-icon" /> Blogs
                </Link>
              </li>
            </ul>

            {/* Contact Button */}
            <Link href="/#contact">
              <button className="button-87">Contact</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
