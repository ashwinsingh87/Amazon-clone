import React from 'react'
import Header from '../Navbar/Header'
import './Orders.css'
import { useStateValue } from "../StateProvider";
// import Product from "../Product/Product"
import Order from './Order';

const Orders = () => {
  const [{ basket, orders }, dispatch] = useStateValue();

  return (
    <>
    <Header />
    <div className='orders'>   
    <h1>Orders</h1>

      {orders.map((innerArray, index) => {        
          return (
            <div key={index}>
              <Order {...innerArray}/>
             
            </div>
          );
              })}
      
    </div>
    
    </>
  )
}

export default Orders
