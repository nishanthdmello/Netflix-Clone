import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Components.css";
import mflixlogo from "./resources/Mflix_Brand_Logo2.png";
import sl1_bg from "./resources/netflix_sl1_bg.jpg";
import netflix_on_tv from "./resources/netflix_on_tv.gif";
import netflix_children_profiles from "./resources/netflix_children_profiles.png";

export default function NavBar() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div
      id="Navbar"
      style={{
        // position: "fixed",
        // display: "grid",
        background: "#222222",
        // width: "100%",
        height: "90px",
      }}
    >
      <img
        src={mflixlogo}
        alt="logo"
        onClick={navigateHome}
        style={{ height: "70%" }}
      />
      <button
        onClick={navigateToLogin}
        style={{
          backgroundColor: "#db4dce",
          color: "white",
          width: "100px",
          height: "40px",
          borderRadius: "5px",
          position: "absolute",
          margin: "20px",
          right: "20px",
        }}
      >
        Sign In
      </button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <WelcomeSlide />
      <Divider />
      <Slide />
      <Divider />
      <Slide1 />
      <Divider />
      <FAQ />
    </div>
  );
  // }
}

class WelcomeSlide extends React.Component {
  render() {
    return (
      <div className="welcome">
        <img src={sl1_bg} alt="demo pic" />
        <center>
          <p>
            Subscribe to get unlimited access to Movies and TV Shows that you
            can <br />
            watch from anywhere anytime. Cancel Subscription when you want to.
          </p>
          <br />
          <br />
          <input type="email" placeholder="Enter your email address" />
          <button>
            <b>See Plans</b>
          </button>
        </center>
      </div>
    );
  }
}

class Slide extends React.Component {
  render() {
    return (
      <div className="slide">
        <img src={netflix_on_tv} alt="demo pic" />
        <p>Watch your favourite Movies and TV Shows on your big screen</p>
      </div>
    );
  }
}

class Slide1 extends React.Component {
  render() {
    return (
      <div className="slide1">
        <img src={netflix_children_profiles} alt="demo pic" />
        <p>
          Create Profiles for Kids and set them free to play and explore in
          entertainment made for them
        </p>
      </div>
    );
  }
}

class FAQ extends React.Component {
  render() {
    return (
      <div id="FAQ">
        <h1>Frequently Asked Questions</h1>
        <br />
        <br />
        <center>
          <button>1. What is MFLIX?</button>
          <br />
          <button>2. What plans can I choose?</button>
          <br />
          <button>3. How many devices can I use this on?</button>
          <br />
          <button>4. When can I cancel my Subscription</button>
          <br />
          <button>
            5. Are there any hidden charges for deleting my subscription?
          </button>
        </center>
      </div>
    );
  }
}

class Divider extends React.Component {
  render() {
    return <div className="divider"></div>;
  }
}

function Login() {
  return (
    <div id="login">
      <form>
        <h3 className="title">Sign In</h3>
        <div className="input_container">
          <input
            type="text"
            name="username"
            required
            autoFocus
            autoComplete="off"
            placeholder="Email"
          />
          <p className="invalid_username">Invalid Email</p>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <a className="forgot_password" href="App1.jsx">
            Forgot Password ?
          </a>
          <p className="invalid_password">Invalid Password</p>
        </div>
        <div className="button_container">
          <button className="sign_in_button">Sign In</button>
          <p className="no_account">Don't have an account ?</p>
          <button className="sign_up_button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
