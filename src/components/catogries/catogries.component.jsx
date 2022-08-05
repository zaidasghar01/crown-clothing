import React from "react";
import CatogryItem from "../catogry-item/catogry-item.componet";
import "./catogries.styles.scss";

const catogriesItem = ({ catogries }) => {
  return (
    <div className="catogries-container">
      {catogries.map((catogry) => (
        <CatogryItem key={catogry.id} catogry={catogry} />
      ))}
    </div>
  );
};

export default catogriesItem;
