import React from 'react'

const Mission = () => {
  return (
   <>
    {/* ------======(OUR MISSION & VISION)======------ */}

    <div className="container visionbox">
  <div className="row align-items-center" >

    {/* Image (Visible Only on Mobile) */}
    <div  data-aos="fade-left"  className="col-12 d-block d-md-none text-center"  >
      <img  className="visionimg-mobile img-fluid"  src="/vissionimg.jpg" alt="Vision Image" />
    </div>

    {/* Left Side - Mission & Vision Text */}
    <div className="col-12 col-md-7"  data-aos="fade-right">
      <div className="visioncontent">
        <h1> Our Mission & Vision <iconify-icon icon="material-symbols:near-me-outline"></iconify-icon></h1>
        <p>
          Growing as a top IT security company in the UAE market, our mission is to provide best-in-class security solutions, building strong relationships with customers and vendors. We aim to fulfill high-end information security needs through expert consulting services and innovative products. Our goal is to be recognized as a top-ranked information security company. <br /><br />
          In an increasingly complex and networked environment, we strive to help customers reach their full potential by being their most preferred system integration partners for IT. We aim to establish long-term, mutually beneficial relationships with customers by meeting their evolving technology needs with cutting-edge network and security infrastructure solutions.
        </p>
      </div>
    </div>

    {/* Right Side - Image (Hidden on Mobile) */}
    <div className="col-12 col-md-5 d-none d-md-block text-center"  data-aos="fade-left" >
      <img className="visionimg img-fluid" src="/vissionimg.jpg" alt="Vision Image" />
    </div>

  </div>
</div>



   </>
  )
}

export default Mission