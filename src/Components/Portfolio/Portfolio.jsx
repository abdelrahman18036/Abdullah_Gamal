import React, { useState } from "react";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";
import { AnimatePresence } from "framer-motion";
import shapeOne from "../../assets/shape-1.png";
import "./portfolio.css";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

function Portfolio() {
  const [projectItems, setProjectItems] = useState(projects);
  const [categoryList, setCategoryList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setProjectItems(newProjectItems);
  };

  return (
    <section className="portfolio section">
      <h2 className="section_title text-cs">Portfolio</h2>
      <p className="section_subtitle">
        My <span>Cases</span>
      </p>

      <List list={categoryList} filterItems={filterItems} />

      <div className="portfolio_container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>

      <div className="section_deco deco_right">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Portfolio</span>
      </div>
    </section>
  );
}

export default Portfolio;
