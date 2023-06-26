import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={props.download_url}
        alt="cat"
        loading="lazy"
      />
      <h2 className="card-text">{props.author}</h2>
      <p className="card-price">{props.width}</p>
      <p className="card-price">{props.height}</p>
      <button className="card-btn">Add to Cart</button>
    </div>
  );
};

export default Card;
