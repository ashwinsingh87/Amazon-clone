import React from "react";
import "./CheckoutList.css"

const CheckoutList = ({ id, image, title, rating, price }) => {
  console.log(id);
  return (
    <div className="checkoutlist">
      <img className="checkoutlist__image" src={image} />
      <div className="checkoutlist__info">
        <p>{title}</p>
        <div className="checkoutlist__price">
          $ <strong>{price}</strong>
        </div>
        <div className="checkoutlist__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
