import "./ForgotPassword.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import {useState} from "react";

function ForgotPassword() {
  const[forgotPassword,setForgotPassword]=useState("");
  return (
    <div id="forgotpassword">
      <div id="form">
        <br />
        <br />
        <div id="text_container">
          <p id="title">Forgot Password ?</p>
          <br />
          <p id="text">
            We will send an email to your provided email id with <br />
            instructions on how to reset your password.
          </p>
          <br />
          <br />
          <br />
        </div>
        <center>
          <input type="email" placeholder="name@example.com" value={forgotPassword} onChange={(event)=>setForgotPassword(event.target.value)}/>
          <br />
          <br />
          {/* {forgotPassword} */}
          <button>Email Me</button>
        </center>
      </div>
    </div>
  );
}


export default function Forgot() {
  return (
    <div>
      <Navbar />
      <ForgotPassword />
    </div>
  );
}
