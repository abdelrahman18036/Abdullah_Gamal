import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";

function Items({ projectItems }) {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, web_link } = projectItem;
        return (
          <motion.div
            layout
            initial={{ opacity: 0.8, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.5 }}
            className="portfolio_items card card_two"
            key={id}
          >
            <div className="portfolio_img_wrapper">
              <img src={img} alt="Image" className="portfolio_img" />
            </div>
            <span className="portfolio_category text-cs">{category}</span>
            <h3 className="portfolio_title">{title}</h3>
            <p className="portfolio_description">{description}</p>
            <a href={web_link} className="link" target="_blank">
              See Website
              <FaArrowRight className="link_icon"></FaArrowRight>
            </a>
            <img src={shapeTwo} alt="Image" className="shape c_shape" />
          </motion.div>
        );
      })}
    </>
  );
}

export default Items;
