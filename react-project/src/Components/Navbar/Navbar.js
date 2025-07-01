import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {

  const links = [
    {path:'/home',name:'Home'},
    {path:'/courses',name:'Courses'},
    {path:'/webinars',name:'Events'},
    {path:'/digitalproducts',name:'Clubs'},
  ]

  const navigate = useNavigate();

  const location = useLocation();

  function navigateFun(path) {
    navigate(path)
  }
  return (
    <>
      <div className="navbar-section">

        <ul type='none' className='nav-lists'> 
          {links.map((item,index) => ( 
            <li className={`lists ${location.pathname === item.path ? 'active-link' : ""}`} key={index} onClick={() => navigateFun(item.path)}>{item.name}
              </li>
          ))}
        </ul>

        <input className="search" type="text" placeholder="Type ur need" onClick={() => navigateFun('/search')}/>

        <button className="login-button-navbar" onClick={() => navigateFun('/')}>Login</button>

      </div>
    </>
  )
}

export default Navbar;