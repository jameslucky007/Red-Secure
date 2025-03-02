"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

const Blogcard = () => {
  const blogs = [
    {
      title: "Red Secure VAPT & Cybersecurity Services",
      description: " Cyber criminals are continuously targeting enterprise applications, mobile applications and APIs. ",
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
    {
      title: "Only Attacks Can Help You Avoid Attacks!",
      description: "The latest reports reveal that the overall number of data breaches (1,862).",
      image: "/Cyber-security.jpg",
      slug: "Avoid-Attacks",
    },
  ];

  return (
    <div className="container mb-5" id="blogs">
      <h2 className="Blog-heading">Latest Blogs</h2>
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
              {/* Using next/image for better optimization */}
              <Image
                src={blog.image}
                width={400} 
                height={250} 
                className="card-img-top"
                alt={blog.title}
                unoptimized // Needed for static exports
              />

              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>

              <div className="text-start m-2 p-2">
                <Link href={`/blog/${blog.slug}`} passHref>
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

export default Blogcard;
