import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card.js";

import "./Shop.css";
const Shop = () => {
  const [shop, setshop] = useState([]);
  const [card, setcard] = useState([]);

  const handleAddtoCard = (singleCard) => {
    const newCard = [...card, singleCard];
    setcard(newCard);
  };
  const resetOnClick = () => {
    setcard([]);
  };
  let randomItem = [...card];
  let randomSingleItem =
    randomItem[Math.floor(Math.random() * randomItem.length)];
  const randomClicked = () => {
    const randomcart = [randomSingleItem];
    setcard(randomcart);
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setshop(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="cards">
        {shop.map((data) => (
          <Card
            key={data.id}
            data={data}
            handleAddtoCard={handleAddtoCard}
          ></Card>
        ))}
      </div>
      <div className="">
        <div className="addedCard">
          {card.map((item) => (
            <div className="shopCart" key={item.id}>
              <img src={item.img} alt=""></img>
              <h3> {item.name}</h3>
            </div>
          ))}

          <button className="reset" onClick={resetOnClick}>
            Reset
          </button>
          <button className="randomClick" onClick={randomClicked}>
            Random Chose Itme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;