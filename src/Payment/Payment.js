import React, { useEffect, useState } from "react";
import "./Payment.css";
import Header from "../Navbar/Header";
import CheckoutList from "../Checkout/CheckoutList";
import { useStateValue } from "../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import axios from "./axios";
import { useNavigate } from "react-router-dom"
// import { db } from "../Firebase";
// import { doc, setDoc, collection } from "firebase/firestore";


const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const value = getBasketTotal(basket);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      },)
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [basket])

  console.log("THE SECRET IS >>>>>", clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    }).then(( paymentIntent ) => {
      // console.log(paymentIntent)

      // if (user && user.uid && paymentIntent) {
      //   setDoc(doc(collection(db, 'user', user.uid, 'orders'), paymentIntent), {
      //     basket: basket,
      //     amount: paymentIntent.amount,
      //     created: paymentIntent.created
      //   });
      // } else {
      //   console.log("User or paymentIntent is undefined or null");
      // }
      console.log("inside paymentIntent")
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      
      dispatch({
        type: 'ORDERS',
        item: {
          basket
        }
      })
      navigate("/orders");
      // dispatch({
      //   type: 'EMPTY__BASKET',
      // })
    }
    )
  };
  const handleChange = event => {
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
                  <strong>Order Total: ${value}.00</strong>
                </div>
                <button type="submit" disabled={disabled || processing || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"} </span>
                </button>
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
