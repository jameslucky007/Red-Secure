import React from "react";
import { useRouter } from "next/router";

const Blogpage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Simulated blog content based on the slug
  const blogContent = {
    "red-secure-vapt-services": {
      title: "Red Secure VAPT Services",
      image: "/vapt.jpg",
      content: "Cyber criminals are continuously targeting enterprise applications...",
    },
    "cyber-security-vapt-infra": {
      title: "Cyber Security, VAPT & Infra Solutions",
      image: "/firewall.jpg",
      content: "We have expertise in a wide range of security products like Firewall / UTM, Endpoint Security...",
    },
    "best-security-practices": {
      title: "Best Security Practices",
      image: "/Security-tips.jpg",
      content: "Cybersecurity is a shared responsibility and it boils down to this...",
    },
    "cybersecurity-awareness": {
      title: "What is the level of Cybersecurity Awareness in your Team?",
      image: "/Cyber-crime.jpg",
      content: "The latest reports reveal that the overall number of data breaches (1,862)...",
    },
  };

  const blog = blogContent[slug];

  if (!blog) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
      <div className="hero-section">
        <img src={blog.image} alt={blog.title} className="img-fluid w-100" />
      </div>

      <div className="container mt-4">
        <h2 className="text-center">{blog.title}</h2>
        <p className="text-center">{blog.content}</p>

        <div className="footer-section mt-5">
          <div className="footer-logo text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Shield_icon.svg/120px-Shield_icon.svg.png" alt="Red Secure Logo"/>
            <h4 className="text-danger">REDSECURE</h4>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 text-start">
              <strong>Contact Us to know more!</strong><br/>
              Pallavi Chavan<br/>
              <a href="mailto:pallavi@redsecureme.com" className="text-danger">pallavi@redsecureme.com</a>
            </div>
            <div className="col-md-6 text-end">
              <strong>Red Secure IT Infrastructure LLC, Dubai</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogpage;
