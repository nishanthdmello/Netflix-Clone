import React from "react";
import img1 from "../images/Mflix_FAQ_1.png";
import img2 from "../images/Mflix_FAQ_2.jpg";
import img3 from "../images/Mflix_FAQ_3.jpg";
import logo from "../images/Mflix_Brand_Logo2.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function FAQpage() {
  return (
    <div>
      <h1>What is Mflix?</h1>
      <img src={img1} alt="missing pic" />
      <p>
        Mflix is a subscription based streaming service that allows our members
        to watch their favourite TV shows and movies without commercials on an
        internet-connected device and do so anywhere anytime without the
        traditional worry of late fees like was in the case during the CD
        borrowing era. <br /> You can also download your favourite entertainment
        to your Android, iOS or Windows devices and watch without internet
        connection. <br /> If you are already a member, go right ahead and
        <a href="/login">Login</a> to watch your favourite shows.
      </p>
      <br />
      <hr />
      <br />
      <h2>Supported Devices</h2>
      <img src={img2} alt="missing pic" />
      <p>
        You can watch Mflix through any internet-connected devices that include
        smart TVs, streaming media players , set-top boxes, smartphones and
        tablets. You can also watch Mflix on your computer or laptop using a
        internet browser. You can check out the
        <a href="https://fast.com" target="_blank" rel="noreferrer">
          internet speed test
        </a>
        to achieve best resolution.
      </p>
      <br />
      <hr />
      <br />
      <h2>Plans and Pricing</h2>
      <img src={img3} alt="missing pic" />
      <p>
        Each Netflix Plan determines the number of devices you can watch Mflix
        on at the same time and if your prefer to view in Standard Definition
        SD, High Definition HD, or Ultra High Definition UHD. Compare our
        <a href="/plans">Plans</a> to decide which is right for you. Remember
        you can cancel it online anytime.
      </p>
      <br />
      <hr />
      <br />
      <h3>Get Started!</h3>
      <img src={logo} alt="missing pic" />
      <p>
        Follow these easy steps to start watching on Mflix today:
        <br />
        1. Visit <a href="/signup">Sign Up</a>.<br />
        2. <a href="/plans">Choose the plan</a> that's right for you. <br />
        3. Enter a payment method. As a Mflix member, you are charged once a
        month on the date you signed up on.
        <br />
        <b>That's it. Enjoy Mflix!</b>
      </p>
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
