import React from "react";
import "./Checkout.css";
import Header from "../Navbar/Header";
import Subtotal from "./Subtotal";
import Navbar from "../Navbar/Navbar";
import { useStateValue } from "../StateProvider";
import CheckoutList from "./CheckoutList";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(basket)
  return (
    <>
      <Header />
      <Navbar />
      <div className="checkout">
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">Shopping Cart</h2>

            {basket?.map((item) => (
              <CheckoutList
                id={item.id}
                image={item.image}
                title={item.title}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
