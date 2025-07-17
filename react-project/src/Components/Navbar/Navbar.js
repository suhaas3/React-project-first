import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../Redux-tooltik/Reducers/LoginFormSclice";

function Navbar() {

  const links = [
    {path:'/home',name:'Home'},
    {path:'/courses',name:'Courses'},
    {path:'/webinars',name:'Events'},
    {path:'/digitalproducts',name:'Clubs'},
  ]

  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();

  const {isAthenticate} = useSelector(state => state.LoginForm);

  function handleLogout () {
    dispatch(Logout())
  }

  function navigateFun(path) {
    navigate(path)
  }
  return (
    <>
      <div className="navbar-section">

          <input className="search" type="text" placeholder="Type ur need" onClick={() => navigateFun('/search')}/>

        <ul type='none' className='nav-lists'> 
          {links.map((item,index) => ( 
            <li className={`lists ${location.pathname === item.path ? 'active-link' : ""}`} key={index} onClick={() => navigateFun(item.path)}>{item.name}
              </li>
          ))}
        </ul>

        <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png" className="cart-logo" onClick={() => navigateFun('/cart')}/>

        {isAthenticate ?  <button className="login-button-navbar" onClick={handleLogout}>Logout</button> : <button className="login-button-navbar" onClick={() => navigateFun('/')}>Login</button>}

      </div>
    </>
  )
}

export default Navbar;