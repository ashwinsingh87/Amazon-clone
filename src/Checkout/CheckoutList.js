import React from "react";
import "./CheckoutList.css";
import { useStateValue } from "../StateProvider";

const CheckoutList = ({ id, image, title, rating, price }) => {
  // console.log(id);
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
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
        <button className="checkoutlist__button" onClick={removeItem}>
          Delete from the cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutList;
