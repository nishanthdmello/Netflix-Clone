import { useNavigate } from "react-router-dom";
import "./WelcomeSlide.css";
import {useState} from "react";

 function WelcomeSlide() {
  const[welcomeEmail,setWelcomeEmail]=useState("");
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="welcome">
      <center>
        <p>
          Subscribe to get unlimited access to Movies and TV Shows that you can{" "}
          <br /> watch from anywhere anytime. Cancel Subscription when you want
          to.
        </p>
        <br />
        <br />
        <input type="email" placeholder="Enter your email address" value={welcomeEmail} onChange={(event)=>setWelcomeEmail(event.target.value)}/>
        {/* {welcomeEmail} */}
        <button onClick={navigateToSignUp}>Sign Up</button>
      </center>
    </div>
  );
}


export default WelcomeSlide;
