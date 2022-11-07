import React from "react";
import "./FAQpage.css";
import img1 from "../images/Mflix_FAQ_1.png";
import img2 from "../images/Mflix_FAQ_2.jpg";
import img3 from "../images/Mflix_FAQ_3.jpg";
import logo from "../images/Mflix_Brand_Logo2.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function FAQpage() {
  return (
    <div id="main">
      <br />
      <br />
      <div className="d1">
        <div className="text">
          <h1>What is Mflix?</h1>
          <br />
          <p>
            Mflix is a subscription based streaming service that allows our
            members to watch their favourite TV shows and movies without
            commercials on an internet-connected device and do so anywhere
            anytime without the traditional worry of late fees like was in the
            case during the CD borrowing era. You can also download your
            favourite entertainment to your Android, iOS or Windows devices and
            watch without internet connection. If you are already a member, go
            right ahead and <a href="/login">Login</a> to watch your favourite
            shows.
          </p>
        </div>
        <div className="img">
          <img src={img1} alt="missing pic" style={{ width: "600px" }} />
        </div>
      </div>
      <br />
      <br />
      <div className="d1">
        <div className="img">
          <img src={img2} alt="missing pic" />
        </div>
        <div className="text">
          <h1>Supported Devices</h1>
          <br />
          <p>
            You can watch Mflix through any internet-connected devices that
            include smart TVs, streaming media players , set-top boxes,
            smartphones and tablets. You can also watch Mflix on your computer
            or laptop using a internet browser. You can check out the{" "}
            <a href="https://fast.com" target="_blank" rel="noreferrer">
              internet speed test
            </a>{" "}
            to achieve best resolution.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="d1">
        <div className="text">
          <h1>Plans and Pricing</h1>
          <br />
          <p>
            Each Mflix Plan determines the number of devices you can watch Mflix
            on at the same time and if your prefer to view in Standard
            Definition SD, High Definition HD, or Ultra High Definition UHD.
            Compare our <a href="/plans">Plans</a> to decide which is right for
            you. Remember you can cancel it online anytime.
          </p>
        </div>
        <div className="img">
          <img id="img3" src={img3} alt="missing pic" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <center>
        <h3>Get Started!</h3>
        <img src={logo} alt="missing pic" style={{ width: "100px" }} />
        <br />
        <br />
        <p>Follow these easy steps to start watching on Mflix today:</p>
        <br />
        <p>
          1. Visit <a href="/signup">Sign Up.</a>
        </p>
        <p>
          2. <a href="/plans">Choose the plan</a> that's right for you.
        </p>
        <p>
          3. Enter a payment method. As a Mflix member, you are charged <br />
          once a month on the date you signed up on.
        </p>
        <br />
        <p>
          <b>That's it. Enjoy Mflix !</b>
        </p>
      </center>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <Navbar />
      <FAQpage />
      <Footer />
    </div>
  );
}
