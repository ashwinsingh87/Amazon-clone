import React, {useEffect, useState} from "react";
import "./Payment.css";
import Header from "../Navbar/Header";
import CheckoutList from "../Checkout/CheckoutList";
import { useStateValue } from "../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import axios from "./axios";

const Payment = () => {
  const [{ basket }] = useStateValue();
  const value = getBasketTotal(basket);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const element = useElements();

  useEffect(()=>{
    const getClientSecret = async()=>{
      const response = await axios({
        method:"post", 
        url:`/payment/create?total=${getBasketTotal(basket)*100}`
      })
    }
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <>
      <Header />
      <div className="payment">
        <h1>Checkout ({basket.length} items)</h1>
        <div className="payment__container">
          <div className="payment__section">
            <h2 className="payment__headings">Delivery Address</h2>

            <div className="payment__addressDetails">
              <p>Nai Basti</p>
              <p>Bijnor, UttarPradesh</p>
              <p>India</p>
            </div>
          </div>
          <div className="payment__section">
            <h2 className="payment__headings">Review items & Delivery</h2>

            <div className="payment__items">
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
          <div className="payment__section">
            <h2 className="payment__headings">Payment Method</h2>
            <div className="payment__method">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <strong>${value}.00</strong>
                  <button disabled={processing || disabled || succeeded }>
                    <span>{processing ? "Processing" : "Buy Now"} </span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
