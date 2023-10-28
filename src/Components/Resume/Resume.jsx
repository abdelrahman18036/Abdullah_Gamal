import React, { useEffect, useRef, useState } from "react";
import { cv } from "../../Data";
import Card from "./Card";
import shapeOne from "../../assets/shape-1.png";
import "./resume.css";

function Resume() {
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
      className={`resume section ${isVisible ? "fade-in" : ""}`}
      id="resume"
    >
      <h2 className="section_title text-cs">Resume</h2>
      <p className="section_subtitle">
        My <span>Story</span>
      </p>

      <div className="resume_container container grid">
        <div className="resume_group">
          <h3 className="resume_heading">Education</h3>
          <div className="resume_items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    // category={val.category}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="resume_group">
          <h3 className="resume_heading">Experience</h3>
          <div className="resume_items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="section_deco deco_left">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">History</span>
      </div>
    </section>
  );
}

export default Resume;
