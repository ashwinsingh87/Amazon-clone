import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket)
  const value = getBasketTotal(basket);
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

        <button>Proceed to Checkout</button>
      </div>
    </>
  );
}

export default Subtotal;
