import React from "react";
import { FaArrowRight } from "react-icons/fa";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/3.png";
import shapeOne from "../../assets/shape-1.png";
import "./blog.css";

function Blog() {
  return (
    <section className="section blog" id="blog">
      <h2 className="section_title text-cs">Latest Blog</h2>
      <p className="section_subtitle">
        My <span>Articles and Advice </span>
      </p>

      <div className="blog_container container grid">
        <div className="blog_item card card_two">
          <span className="blog_date text-cs">SEPTEMBER 22, 2023</span>
          <h3 className="blog_title">Emotional Journeys Exploring the World</h3>
          <p className="blog_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            corrupti nisi velit non in vero reiciendis praesentium fugit? Sed,
            deserunt.
          </p>
          <a href="#" className="link" target="_blank">
            Read More
            <FaArrowRight className="link_icon"></FaArrowRight>
          </a>
          <img src={blog1} alt="Image" className="blog_img" />
        </div>

        <div className="blog_item card card_two">
          <span className="blog_date text-cs">October 18, 2023</span>
          <h3 className="blog_title">Emotional Exploring the Colorful World</h3>
          <p className="blog_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            corrupti nisi velit non in vero reiciendis praesentium fugit? Sed,
            deserunt.
          </p>

          <a href="#" className="link" target="_blank">
            Read More
            <FaArrowRight className="link_icon"></FaArrowRight>
          </a>
          <img src={blog2} alt="Image" className="blog_img" />
        </div>

        <div className="blog_item card card_two">
          <span className="blog_date text-cs">March 15, 2023</span>
          <h3 className="blog_title">Fit and Fabulous Embrace the Journey </h3>
          <p className="blog_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            corrupti nisi velit non in vero reiciendis praesentium fugit? Sed,
            deserunt.
          </p>

          <a href="#" className="link" target="_blank">
            Read More
            <FaArrowRight className="link_icon"></FaArrowRight>
          </a>
          <img src={blog3} alt="Image" className="blog_img" />
        </div>
      </div>

      <div className="section_deco deco_right">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Blog</span>
      </div>
    </section>
  );
}

export default Blog;
