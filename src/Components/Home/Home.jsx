import React from "react";
import profileImg from "../../assets/me.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import CV from "../../assets/Abdullah_CV.pdf";
import "./home.css";

function Home() {
  return (
    <section className="home fade-up" id="home ">
      <div className="home_wrapper">
        <div className="home_container container">
          <p className="home_subtitle">
            Hello, <span>My Name Is </span>
          </p>
          <h1 className="home_title text-cs">
            {" "}
            <span>Abdullah</span> Gamal
          </h1>

          <p className="home_job">
            <span className="text-cs">I Am</span> <b>Front-End Developer</b>
          </p>

          <div className="home_img-wrapper">
            {/* <div className="home_banner">
              <img src={profileImg} alt="Image" className="home_profile" />
            </div> */}
            <div className="image_box">
              {/* <img src={profileImg} alt="" /> */}
            </div>
            <p className="home_data home_data_one">
              <span className="text-lg">
                1<b className="plus">+ </b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>
            <p className="home_data home_data_two">
              <span className="text-lg">30</span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>
            <img src={shapeOne} alt="Image" className="shape shape_1" />
            {/* <img src={shapeTwo} alt="Image" className="shape shape_2" />
            <img src={shapeTwo} alt="Image" className="shape shape_3" /> */}
          </div>

          <p className="home_text">
            From Cairo , Egypt. I have rich experience as a Front-End Developer
            , I love to talk with you about our unique Experience
          </p>

          <div className="home_social">
            <a
              href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
              target="_blank"
              className="home_social-link"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/AbdullahGamal20"
              className="home_social-link"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/abdalla.gamal.7121"
              className="home_social-link"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </div>

          <div className="home_btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>
            <a href="#skills" className="hero_link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section_deco deco_left home_deco">
          <img src={shapeOne} alt="Image" className="shape" />
        </div>
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Front Developer</span>
      </div>
    </section>
  );
}

export default Home;
