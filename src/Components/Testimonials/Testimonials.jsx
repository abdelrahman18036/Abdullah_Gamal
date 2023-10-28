import React, { useEffect, useRef, useState } from "react";
import { testimonials } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import shapeTwo from "../../assets/shape-2.png";
import shapeOne from "../../assets/shape-1.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";

import "./testimonials.css";

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`testimonials section ${isVisible ? "fade-in" : ""}`}
      id="testimonials"
    >
      <h2 className="section_title text-cs">Testimonials</h2>
      <p className="section_subtitle">
        My <span>Clients Say</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="testimonials_container container mySwiper"
      >
        {testimonials.map(({ img, name, author, description }, index) => {
          return (
            <SwiperSlide
              className="testimonials_item card card_one"
              key={index}
            >
              <div className="testimonial_header">
                <div className="testimonial_icon">
                  <img src={testimonialIcon} alt="Icon" />
                </div>
                <img src={img} alt="Image" className="testimonial_img" />
              </div>
              <p className="testimonial_description">{description}</p>
              <h3 className="testimonial_name">{name}</h3>
              <p className="testimonial_author">{author}</p>

              <img src={shapeTwo} alt="Shape" className="shape c_shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section_deco deco_right">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Reviews</span>
      </div>
    </section>
  );
}

export default Testimonials;
