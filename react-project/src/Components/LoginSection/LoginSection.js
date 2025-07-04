import React, { useState } from "react";
import './LoginSection.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function LoginSection() {

  const [userDetails, updateUserDetails] = useState({
    userName: '',
    password: ''
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  function getUserName(event) {
    const userName = event.target.value;
    updateUserDetails(pre => ({
      ...pre,
      userName: `${userName}`
    }));
  }
  function getPassword(event) {
    const password = event.target.value;
    updateUserDetails(pre => ({
      ...pre,
      password: `${password}`
    }));
  }

  async function getUserDetails() {
    try {
      const user = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email: userDetails.userName,
        password: userDetails.password
      })
    } catch (error) {
      console.log('Error :', error.message)
    }
  }


  function displayUserDetails() {
    getUserDetails();
    try {
      if (userDetails.userName === 'john@mail.com' && userDetails.password === 'changeme') {
        alert('Login Succesfully')
        navigate('/home')
      } else {
        setError('sorry, Ur password was incorrect. Please double check ur password')
      }
    } catch (error) {
      console.log('Error:', error.message)
    }
  }

  function goToHome(event) {
    if (event.key === 'Enter') {
      navigate('/home')
    }
  }


  return (
    <>
    <div className="login">
      <div className="login-main-section">
        <h3>Login Section</h3>
        <div className="login-section">
          <input type="text" placeholder="UserName or email" className="username-input" onChange={getUserName} />
          <input type="password" placeholder="Password" className="password-input" onChange={getPassword} onKeyDown={goToHome} />
          <button className="login-button" onClick={displayUserDetails}>Login</button>
          <span className="error-message">{error}</span>
          <div className="or-container">
            <div className="hr-container">
              <div className="hr-line">
                <hr />
              </div>
              <div className="or-text">
                OR
              </div>
              <div className="hr-line">
                <hr />
              </div>
            </div>
            <div className="email-login">
              <span>Login with Email</span>
            </div>
            <div className="forgotten-password">
              <span>Forgotten password ?</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}


export default LoginSection;