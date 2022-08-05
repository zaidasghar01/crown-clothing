import React from "react";
import "./catogry-item.styles.scss";

const card = ({ catogry }) => {
  return (
    <div className="catogry-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${catogry.imageUrl})`,
        }}
      />
      <div className="catogry-body-container">
        <h2>{catogry.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default card;
