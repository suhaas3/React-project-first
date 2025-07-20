import React, { useEffect, useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../Redux-tooltik/Reducers/LoginFormSclice";
import CustomLoginForm from "../CustomLoginForm/CustomLoginForm";

function Navbar() {

  const links = [
    { path: '/home', name: 'Home' },
    { path: '/courses', name: 'Courses' },
    { path: '/webinars', name: 'Events' },
    { path: '/digitalproducts', name: 'Clubs' },
  ]

  const [openLogin, setOpenLogin] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();


  function navigateFun(path) {
    navigate(path)
  }

  function handleLogin() {
    setOpenLogin(prev => !prev);
  }

  return (
    <>
      <div className="navbar-section">

        <input className="search" type="text" placeholder="Type ur need" onClick={() => navigateFun('/search')} />

        <ul type='none' className='nav-lists'>
          {links.map((item, index) => (
            <li className={`lists ${location.pathname === item.path ? 'active-link' : ""}`} key={index} onClick={() => navigateFun(item.path)}>{item.name}
            </li>
          ))}
        </ul>

        <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png" className="cart-logo" onClick={() => navigateFun('/cart')} />

        <button className="login-button-navbar" onClick={handleLogin}>Login</button>

      </div>

      {openLogin && <CustomLoginForm openLogin={openLogin} setOpenLogin={setOpenLogin} />}
    </>
  )
}

export default Navbar;