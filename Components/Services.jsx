import React from 'react';

const Services = () => {
  return (
    <>
      {/* ------=====( SERVICE )======------ */}
      <div id='services'></div>
      <div className='cardbg'></div>

      <div className='servicebg'>
        <div className='servicehead'>
          <div className='hrdesign'>
            <span className='hrline'></span>
            <h1>Services</h1>
            <span className='hrline'></span>
          </div>
          <p className='serviceheadtext'>
            We provide the best quality cybersecurity services for your organisation.
          </p>
        </div>

        {/* ------=====( SERVICE CARD )======------ */}
        <div className='container'>
          <div className='servicebg'>
            <div className='innerdigi'>
              <div className='row'>
                {[
                  {
                    imgSrc: '/Network.svg',
                    title: 'IT Infrastructure Services',
                    text:
                      'IT infrastructure services & solutions transform your business operations by helping businesses structure cabling, CCTV, IP Telephony, Server, Storage, Antivirus, Firewalls, Switches, and Wireless solutions & many more.',
                  },
                  {
                    imgSrc: '/cyber-security.svg',
                    title: 'CyberSecurity Services',
                    text:
                      'Cyber Security protects systems, networks, programs, devices, and data from cyber attacks. Our aim is to reduce the risk of cyber attacks and protect against the unauthorized exploitation of systems, networks, and technologies.',
                  },
                  {
                    imgSrc: '/VAPT.svg',
                    title: 'Gateway Security',
                    text:
                      'Gateway security has long been a high priority for organizations since it enables them to protect the outbound traffic & facilitate compliance, improve employee productivity, and optimize the use of valuable IT resources.',
                  },
                  {
                    imgSrc: '/Data.svg',
                    title: 'Data Backup & Restore',
                    text:
                      'We are partnered with Veeam VCSP Pulse to help our customers with critical business running. The monthly usage can help our customers in billing, and our technical expertise comes as a service for life.',
                  },
                  {
                    imgSrc: '/It.svg',
                    title: 'VAPT Services',
                    text:
                      'Strengthen organization security with VAPT: identify weaknesses, receive guidance. Our in-house expertise & custom tools support the complete VAPT process. Call us for a free assessment today.',
                  },
                  {
                    imgSrc: '/cloude.svg',
                    title: 'Cloud Security',
                    text:
                      'Protecting cloud data is critical as we migrate to the cloud. It requires policies, a security-focused culture, and cloud security solutions for devices, data centers, and business processes.',
                  },
                  {
                    imgSrc: '/end-point.svg',
                    title: 'Endpoint Security',
                    text:
                      'Endpoint security is the practice of securing endpoints or entry points of end-user devices such as desktops, laptops, and mobile devices from being exploited by malicious actors and campaigns.',
                  },
                  {
                    imgSrc: '/support.svg',
                    title: 'Technical Support',
                    text:
                      'During critical times, organizations need expert assistance. The RedSecure team offers highly qualified cybersecurity professionals who can assist anytime across all cybersecurity domains.',
                  },
                  {
                    imgSrc: '/services.svg',
                    title: 'IT AMC Service',
                    text:
                      'We offer top-notch IT and cybersecurity services. Our expertise includes 24/7 support, AMC services, and maintenance for firewalls, endpoint security, switches, desktops, servers, and many more.',
                  },
                ].map(({ imgSrc, title, text }, index) => (
                  <div key={index} className='col-lg-4'>
                    <div className='cardnamediv shadow-lg'>
                      <div className='cardcontainer'>
                        <div className='cardimg'>
                          <img className='cardimage' src={imgSrc} alt={title} />
                        </div>
                        <div className='cardcontent'>
                          <h3>{title}</h3>
                          <p>{text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='cardbg mt-5'></div>
      </div>
    </>
  );
};

export default Services;
