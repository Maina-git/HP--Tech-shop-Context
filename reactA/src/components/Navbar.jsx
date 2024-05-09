import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        FRANCIS TECH SHOPPIE
      </div>
      <div className="links">
        <Link to="/">SHOP</Link>
        <Link to="/cart">CART</Link>
      </div>
    </div>
  )
}
export default Navbar;
