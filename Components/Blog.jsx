import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

const Blog = () => {
  const blogs = [
    {
      title: "Red Secure VAPT Services",
      description: "Cyber criminals are continuously targeting enterprise applications.",
      image: "/vapt.jpg",
      slug: "red-secure-vapt-services",
    },
    {
      title: "Cyber Security, VAPT & Infra Solutions",
      description: "We have expertise in a wide range of security products like Firewall / UTM, Endpoint Security.",
      image: "/firewall.jpg",
      slug: "cyber-security-vapt-infra",
    },
    {
      title: "Best Security Practices designed to beat systems before attackers do it",
      description: "Cybersecurity is a shared responsibility and it boils down to this: In Cybersecurity.",
      image: "/Security-tips.jpg",
      slug: "best-security-practices",
    },
    {
      title: "What is the level of Cybersecurity Awareness in your Team?",
      description: "The latest reports reveal that the overall number of data breaches (1,862).",
      image: "/Cyber-crime.jpg",
      slug: "cybersecurity-awareness",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Latest Blogs</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="card shadow-sm">
              {/* Blog Image */}
              <img src={blog.image} className="card-img-top" alt={blog.title} />

              {/* Blog Content */}
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>

              {/* Read More Button (Above Image) */}
              <div className="text-start m-2 p-2">
                <Link href={`pages/Blog.js`} passHref>
                  <button className="contact-btn">Read More</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
