import React from "react";

const Categories = ({  categories,filterItems }) => {
  //console.log(categories)
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type = 'button'
            key={index}
            className="filter-btn"
            onClick={() => 
            filterItems(category)}  
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
