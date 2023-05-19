import React from "react";
import Header from "../Navbar/Header";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import { ROW_1, ROW_2, ROW_3, ROW_4, ROW_5 } from "../helper";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61p-k-MohqL._SX3000_.jpg"
            alt=""
          ></img>
          
          {/* First Row */}
          <div className="home__row">
          {ROW_1.map(item=>
            <Product {...item} key={item.key} />
          )} 
          </div>

          {/* Second Row */}
          <div className="home__row">
          {ROW_2.map(item=>
            <Product {...item} key={item.key}/>
          )} 
          </div>

          {/* Third Row */}
          <div className="home__row">
           {ROW_3.map(item=>
              <Product {...item} key={item.key}/>
            )}
          </div>

          {/* Fourth Row */}
          <div className="home__row">
          {ROW_4.map(item=>
            <Product {...item} key={item.key} />
          )} 
          </div>

            {/* Fifth Row */}
            <div className="home__row">
          {ROW_5.map(item=>
            <Product {...item} key={item.key} />
          )} 
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
