import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
import { useState } from "react";
import axios from "axios";


function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const navigateToForgotPassword = () => {
    navigate("/forgot");
  };
  const navigateToMovies = () => {
    navigate("/Movies");
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    // var send_user = {
    //   username:username,
    //   password:password
    // };
    axios.post("http://localhost:4000/app/login",{username:username,password:password})
    .then((res)=>{
      if(res.data.message=="true")
          navigateToMovies()
      else
          alert("incorrect login credentials")

    })
    // alert(value)
    // if(value==true)
    //   navigateToMovies()
    // else  
    //   alert("user not found")
  }
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <h3 className="title">Sign In</h3>
        <input
          type="text"
          name="username"
          required
          autoFocus
          autoComplete="off"
          placeholder="username"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        />
        <p className="invalid_username">Invalid Email</p>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />
        <p className="invalid_password">Invalid Password</p>
        <p className="forgot_password" onClick={navigateToForgotPassword}>
          Forgot Password ?
        </p>
        <div className="button_container">
          <button className="sign_in_button">Sign In</button>
          <p className="no_account">Don't have an account ?</p>
          <button className="sign_up_button" onClick={navigate}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default function login() {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}
