import React from "react";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaCheck, FaArrowRight } from "react-icons/fa";

import "./pricing.css";

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <h2 className="section_title text-cs">Pricing</h2>
      <p className="section_subtitle">
        My <span>Price Board</span>
      </p>

      <div className="pricing_container container grid">
        <div className="pricing_item card card_one">
          <span className="pricing_subtitle text-cs">Hourly Basis</span>

          <h3 className="pricing_price">
            10 <span>$</span> <em>Hour</em>
          </h3>

          <p className="pricing_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam
            debitis ex vitae doloribus quam odit nostrum dolorum, libero nisi
            deserunt atque maxime laborum quia!
          </p>

          <ul className="pricing_list">
            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>Front-End </span>
            </li>

            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>Responsive Design </span>
            </li>

            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>Web Apps</span>
            </li>

            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>User Friendly Design</span>
            </li>
          </ul>

          <a
            href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
            target="_blank"
            className="btn pricing_btn text-cs"
          >
            Start Project
            <FaArrowRight className="pricing_btn_icon"></FaArrowRight>
          </a>

          <img src={shapeTwo} alt="Image" className="shape c_shape" />
        </div>

        <div className="pricing_item_wrapper">
          <span className="pricing_label text-cs">Popular</span>
          <div className="pricing_item card card_one">
            <span className="pricing_subtitle text-cs">Freelancing</span>

            <h3 className="pricing_price">
              100 <span>$</span> <em>Weekly</em>
            </h3>

            <p className="pricing_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              quisquam debitis ex vitae doloribus quam odit nostrum dolorum,
              libero nisi deserunt atque maxime laborum quia!
            </p>

            <ul className="pricing_list">
              <li className="list_item">
                <FaCheck className="list_icon"></FaCheck>
                <span>Front-End </span>
              </li>

              <li className="list_item">
                <FaCheck className="list_icon"></FaCheck>
                <span>Responsive Design </span>
              </li>

              <li className="list_item">
                <FaCheck className="list_icon"></FaCheck>
                <span>Web Apps</span>
              </li>

              <li className="list_item">
                <FaCheck className="list_icon"></FaCheck>
                <span>User Friendly Design</span>
              </li>
            </ul>

            <a
              href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
              target="_blank"
              className="btn pricing_btn text-cs"
            >
              Start Project
              <FaArrowRight className="pricing_btn_icon"></FaArrowRight>
            </a>

            <img src={shapeTwo} alt="Image" className="shape c_shape" />
          </div>
        </div>
        <div className="pricing_item card card_one">
          <span className="pricing_subtitle text-cs">Full Time</span>

          <h3 className="pricing_price">
            450 <span>$</span> <em>Month</em>
          </h3>

          <p className="pricing_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam
            debitis ex vitae doloribus quam odit nostrum dolorum, libero nisi
            deserunt atque maxime laborum quia!
          </p>

          <ul className="pricing_list">
            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>Front-End </span>
            </li>

            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>Responsive Design </span>
            </li>

            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>Web Apps</span>
            </li>

            <li className="list_item">
              <FaCheck className="list_icon"></FaCheck>
              <span>User Friendly Design</span>
            </li>
          </ul>

          <a
            href="https://www.linkedin.com/in/abdullah-gamal-mohamed/"
            target="_blank"
            className="btn pricing_btn text-cs"
          >
            Start Project
            <FaArrowRight className="pricing_btn_icon"></FaArrowRight>
          </a>

          <img src={shapeTwo} alt="Image" className="shape c_shape" />
        </div>
      </div>

      <div className="section_deco deco_left">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Pricing </span>
      </div>
    </section>
  );
}

export default Pricing;
