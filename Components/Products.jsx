import React from 'react'
import { FaGripLinesVertical } from "react-icons/fa";

const Products = () => {
  return (
    <>

      {/* Product Header Section */}
      <section className="product-header">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                <FaGripLinesVertical className="product-bars" /> Our Products{" "}
                <FaGripLinesVertical className="product-bars" />
              </h2>
              <p>
                We offer top-notch cybersecurity solutions tailored to protect
                your organization from digital threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Card Section */}
      <div className="container">
        <div className="row justify-content-center row-gap">
          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className="product-card">
              <img className="product-img" src="/firewall-2.png" alt="Product" />
              <div className="product-content">
                <h3>Next Gen SD-WAN</h3>
                <p>
                Simplify the management and operation of a WAN by decoupling the networking hardware from its control mechanism. Have application level awareness, give bandwidth priority to the most critical applications. Split applications between two paths to improve performance by delivering it faster        </p>
              </div>
              <div className="hover-effect"></div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className="product-card">
              <img className="product-img" src="/product.svg" alt="Product" />
              <div className="product-content">
                <h3>Email Security Solutions</h3>
                <p>A mail security product safeguards email channels from threats like phishing attacks. Cybercriminals often use deceptive emails to trick users into revealing sensitive information. By detecting, filtering, and blocking malicious messages, it helps prevent unauthorized access, ensuring secure communication and data protection </p>
              </div>
              <div className="hover-effect"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="container">
        <div className="row justify-content-center row-gap">
          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className="product-card">
              <img className="product-img" src="/shield-1.png" alt="Product" />
              <div className="product-content">
                <h3>Endpoint Security Solution</h3>
                <p>Endpoint security products streamline security administration, making it easier to manage your organization's endpoint protection. We cover all aspects of endpoint security and risk management, from initial assessment to strategic planning, hands-on deployment, and 24/7 support, ensuring comprehensive protection against evolving cyber threats </p>
              </div>
              <div className="hover-effect"></div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12 ">
            <div className="product-card">
              <img className="product-img" src="/product.svg" alt="Product" />
              <div className="product-content">
                <h3>Patch Management Solutions</h3>

                <p>Ensure your systems remain secure, compliant, up-to-date, reliable, and running efficiently. Our solution synchronizes, scans, downloads, tests, and deploys approved patches to designated computers while generating detailed reports. All patch information is collected, thoroughly analyzed, categorized, validated, and securely stored in a centralized patch database for seamless and efficient management.</p>
              </div>
              <div className="hover-effect"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="container mb-5">
        <div className="row justify-content-center row-gap">
          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className="product-card">
              <img className="product-img" src="/product.svg" alt="Product" />
              <div className="product-content">
                <h3>Next Generation Firewall & UTM</h3>
                <p>Our Enhanced Firewall Solution offers intrusion prevention and application intelligence for robust network security. In contrast, Unified Threat Management (UTM) systems go further by integrating email security, URL filtering, wireless security, web application firewalls, and virtual private networks (VPNs) for comprehensive protection  </p>
              </div>
              <div className="hover-effect"></div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className="product-card">
              <img className="product-img" src="/product.svg" alt="Product" />
              <div className="product-content">
                <h3>DLP and User Activity Monitoring Solutions</h3>
                <p>Data Loss Prevention (DLP) is a security strategy designed to prevent users from accidentally or intentionally leaking sensitive or critical information outside the corporate network, ensuring data confidentiality, compliance, and protection against unauthorized access.  </p>
              </div>
              <div className="hover-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products