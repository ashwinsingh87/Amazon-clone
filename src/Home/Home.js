import React from "react";
import Header from "../Navbar/Header";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

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

          <div className="home__row">
            <Product
            id={12333}
              title="Logitech M235 Wireless USB Mouse for Windows and Mac - Black/Grey
Logitech M235 Wireless USB Mouse for Windows and Mac - Black/Grey!!!!"
              price={649.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/71fybw1BEZL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="Rey Naturals® Coconut Oil | Virgin Coconut Oil (Cold Pressed) For Hair and Skin - 100% Pure & Natural Coconut Oil (200 ml)
            Rey Naturals® Coconut Oil | Virgin Coconut Oil (Cold Pressed) For Hair and Skin - 100% Pure & Natural Coconut Oil (20"
              price={199.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/513R7TjceRL._AC_UL160_SR160,160_.jpg"
              rating={5}
            />
            <Product
            id={12333}
              title="Fix My Curls Travel sized Protein Styling Bundle With Defining Hair Gel And Leave In Cream for Frizz Control, Shine, Curl Def
          Fix My Curls Travel sized Protein Styling Bundle With Defining Hair Gel And Leave In Cream for Frizz Control, Shine, Curl"
              price={376.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/513Zn+ZF4vL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
            id={12333}
              title="Noise Newly Launched Noise Evolve 2 Play AMOLED Display Smart Watch with Fast Charging, Always On Display, 50 Sports Modes, H
            Noise Newly Launched Noise Evolve 2 Play "
              price={3499.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/61vzxhjYJlL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="AmazonBasics 9W, Dimming Halo Rechargeable Table Lamp, 3 Colors (Cool Day Light, Neutral White and Warm White)
            AmazonBasics 9W, Dimming Halo Rechargeable Table Lamp"
              price={849.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/51A5RVXIklS._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="Eksa E900 Stereo Gaming Wired Over Ear Headphones With Mic With Noise Canceling, Detachable Compatible With Ps4, Ps5, Pc, Lap
            "
              price={2299.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/71jb3cBIu9L._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="Xiaomi 11 Lite NE 5G (Jazz Blue 6GB RAM 128 GB Storage) | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone | 10-bit AMOLED w
            Xiaomi 11 Lite NE 5G (Jazz Blue 6GB RAM 128 GB Storage)"
              price={23999.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/71XmlboxNZL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
            id={12333}
              title="Kore PVC DM 1-5 Kg (Set of Two) Combo 161 (Round/Hex) Dumbbells Set and Fitness Kit for Men and Women Whole Body Workout
            Kore PVC DM 1-5 Kg (Set of Two) Combo 161 (Round/Hex) Dumbbells Set and Fitness Kit for Men and Women Whole"
              price={479.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/713zoEM3wlL._AC_UL160_SR160,160_.jpg"
              rating={5}
            />
            <Product
            id={12333}
              title="CableCreation USB C to Ethernet Adapter, USB 3.0 Type C to RJ45 Cat5 Ethernet Adapter 10/100/1000 Mbps Compatible with Galaxy
            CableCreation USB C to Ethernet Adapter, USB 3.0 Type C to RJ45 Cat5 Ethernet Adapter"
              price={899.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/51xPl5+rBAS._AC_UL160_SR160,160_.jpg"
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
            id={12333}
              title="Noise Newly Launched Noise Evolve 2 Play AMOLED Display Smart Watch with Fast Charging, Always On Display, 50 Sports Modes, H
            Noise Newly Launched Noise Evolve 2 Play "
              price={3499.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/61vzxhjYJlL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="AmazonBasics 9W, Dimming Halo Rechargeable Table Lamp, 3 Colors (Cool Day Light, Neutral White and Warm White)
            AmazonBasics 9W, Dimming Halo Rechargeable Table Lamp"
              price={849.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/51A5RVXIklS._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="Eksa E900 Stereo Gaming Wired Over Ear Headphones With Mic With Noise Canceling, Detachable Compatible With Ps4, Ps5, Pc, Lap
            "
              price={2299.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/71jb3cBIu9L._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="Xiaomi 11 Lite NE 5G (Jazz Blue 6GB RAM 128 GB Storage) | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone | 10-bit AMOLED w
            Xiaomi 11 Lite NE 5G (Jazz Blue 6GB RAM 128 GB Storage)"
              price={23999.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/71XmlboxNZL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
            id={12333}
              title="Logitech M235 Wireless USB Mouse for Windows and Mac - Black/Grey
Logitech M235 Wireless USB Mouse for Windows and Mac - Black/Grey!!!!"
              price={649.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/71fybw1BEZL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
            <Product
            id={12333}
              title="Rey Naturals® Coconut Oil | Virgin Coconut Oil (Cold Pressed) For Hair and Skin - 100% Pure & Natural Coconut Oil (200 ml)
            Rey Naturals® Coconut Oil | Virgin Coconut Oil (Cold Pressed) For Hair and Skin - 100% Pure & Natural Coconut Oil (20"
              price={199.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/513R7TjceRL._AC_UL160_SR160,160_.jpg"
              rating={5}
            />
            <Product
            id={12333}
              title="Fix My Curls Travel sized Protein Styling Bundle With Defining Hair Gel And Leave In Cream for Frizz Control, Shine, Curl Def
          Fix My Curls Travel sized Protein Styling Bundle With Defining Hair Gel And Leave In Cream for Frizz Control, Shine, Curl"
              price={376.00}
              image="https://images-eu.ssl-images-amazon.com/images/I/513Zn+ZF4vL._AC_UL160_SR160,160_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
