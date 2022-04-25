import React from "react";
import "./Card.css";
const Card = ({ data, handleAddtoCard }) => {
  const { name, img, price } = data;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
      </div>
      <button className="btn-cart" onClick={() => handleAddtoCard(data)}>
        <p className="btn-text">Add to Cart</p>
      </button>
    </div>
  );
};

export default Card;