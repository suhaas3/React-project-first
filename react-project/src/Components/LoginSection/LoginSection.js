import React, { useState } from "react";
import './LoginSection.css';
import { useNavigate } from "react-router-dom";


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
  function displayUserDetails() {
    if (userDetails.userName === 'rajini kanth' && userDetails.password === '12345') {
      alert('Login Succesfully')
      navigate('/home')
    } else {
      setError('sorry, Ur password was incorrect. Please double check ur password')
      alert('sorry, Ur password was incorrect. Please double check ur password')
    }
    console.log(userDetails.userName, userDetails.password)
  }



  return (
    <>
      <div className="login-main-section">
        <h3>Login Section</h3>
        <div className="login-section">
          <input type="text" placeholder="UserName" className="input-username" onChange={getUserName} />
          <input type="text" placeholder="Password" className="input-password" onChange={getPassword} />
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
    </>
  )
}


export default LoginSection;