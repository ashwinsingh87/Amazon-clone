import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe("pk_test_51N8IvZSCiG7V11qJHhFbgwcm5Gvt29vKsCFhG6J55xNiV8jbPeCahgp5wfNYjRdvj3DWZ7wDqeZkXTiH4H904UQ000t9UTAjRh")
// console.log(promise)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={promise}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Elements>
  </React.StrictMode>
);

reportWebVitals();
