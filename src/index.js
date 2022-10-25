import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./HomePage/Home";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Plans from "./Plans/Plans";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Navbar />
    <Home />
  </div>
);
