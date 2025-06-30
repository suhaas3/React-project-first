import React from "react";
import './Navbar.css';

function Navbar() {

  return (
    <>
      <div className="navbar-section">
        <ul type='none' className="nav-lists"> 
          <li className="logo">Logo</li>
          <input className="search" type="text" placeholder="Type ur need"/>
          <li className="clubs">Courses</li>
          <li className="events">Webinars</li>
          <li className="digital-products">Digital Products</li>
          <li className="profile">Profile</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;