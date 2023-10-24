import React, { useState } from "react";

function List({ list, filterItems }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="portfolio_list">
        {list.map((category, index) => {
          return (
            <button
              key={index}
              className={`${
                active === index ? "active_work " : ""
              }portfolio_list_item text-cs`}
              onClick={() => {
                setActive(index);
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default List;
