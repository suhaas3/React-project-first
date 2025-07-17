import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchBar from "./Components/SearchBar/SearchBar";
import Courses from "./Components/Courses/Courses";
import Webinars from "./Components/Webinars/Webinars";
import DigitalProducts from "./Components/DigitalProducts/DigitalProducts";
import LoginSection from "./Components/LoginSection/LoginSection";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const {isAthenticate} = useSelector(state => state.LoginForm)
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={isAthenticate ? <Home /> : <Navigate to='/'/>}/>
          <Route path="/search" element={isAthenticate ? <SearchBar/> : <Navigate to='/' />}/>
          <Route path="/courses" element={isAthenticate ? <Courses /> : <Navigate to='/' />}/>
          <Route path="/webinars" element={isAthenticate ? <Webinars /> : <Navigate to='/' />}/>
          <Route path="/digitalProducts" element={isAthenticate ? <DigitalProducts/> : <Navigate to='/' />}/>
          <Route path="/cart" element={isAthenticate ? <Cart/> : <Navigate to='/' />}/>
          <Route path="/" element={<LoginSection/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
