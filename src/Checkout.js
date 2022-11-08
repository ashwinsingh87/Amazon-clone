import React from "react";
import "./Checkout.css";
import Header from "./Header";
import Subtotal from "./Subtotal";
import Navbar from './Navbar'
function Checkout() {
  return (
    <>
      <Header />
      <Navbar/>
      <div className="checkout">
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
          </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
      </div>
    </>
  );
}

export default Checkout;
