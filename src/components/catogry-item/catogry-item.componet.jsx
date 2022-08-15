import { useNavigate } from "react-router-dom";

import React from "react";
import "./catogry-item.styles.scss";

const Card = ({ catogry }) => {
  const { imageUrl, title, route } = catogry;
  const navigate = useNavigate();
  const onChangeNavigation = () => {
    navigate(route);
  };
  return (
    <div className="catogry-container" onClick={onChangeNavigation}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="catogry-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Card;
