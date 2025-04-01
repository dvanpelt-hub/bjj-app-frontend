import React from "react";
import { Avatar } from "antd";
import "./CategoryCard.css"

const CategoryCard = (props) => {
  const {image, title, color} = props
  return (
    <>
      <Avatar src={image} size={130} alt={title} style={{backgroundColor: color}} />
      <p className="category-card-title">{title}</p>
    </>
  );
};

export default CategoryCard;
