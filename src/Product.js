import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>product information that will be displayed over the product</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
        <p>*</p>
        </div>

      </div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" alt=""/>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
