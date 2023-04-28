import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket)
  const value = getBasketTotal(basket);
  const navigate = useNavigate();
  return (
    <>
      <div className="subtotal">
        <p>
          Subtotal({basket?.length} items): <strong>${value}.00</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift.
        </small>

        <button onClick={(e) => navigate("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    </>
  );
}

export default Subtotal;
