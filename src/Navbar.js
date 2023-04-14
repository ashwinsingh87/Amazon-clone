import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className='navbar'>
       <div className='navbar__left'>
        <MenuIcon/>
        <p>All</p>
       </div>
       <div className='navbar__right'>
       <a href="#home" >Sell</a> 
       <a href="#home" >Best Seller</a> 
       <a href="#home" >Today's Deals</a> 
       <a href="#home" >Mobiles</a> 
       <a href="#home" >Customer Service</a> 
       <a href="#home" >Electronics</a> 
       <a href="#home" >Home & Kitchen</a> 
       <a href="#home" >Fashion</a> 
       <a href="#home" >Books</a> 
       <a href="#home" >Prime</a> 
       <a href="#home" >New Release</a> 
       <a href="#home" >Computers</a> 
       <a href="#home" >Amazon Pay</a> 
       <a href="#home" >Coupons</a> 
    </div>
    </div>
  )
}

export default Navbar