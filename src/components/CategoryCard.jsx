import React from "react";
import { Avatar } from "antd";
import "./CategoryCard.css"

const CategoryCard = (props) => {
  const {image, title} = props
  return (
    <>
      <Avatar src={image} size={130} alt={title} />
      <p className="category-card-title">{title}</p>
    </>
  );
};

export default CategoryCard;
