import { useNavigate } from "react-router-dom";
import "./WelcomeSlide.css";

 function WelcomeSlide() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const navigateToFAQ=()=> {
    navigate("/FAQ")
  }

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
        <button id="welcome_button" onClick={navigateToSignUp}>Sign Up</button>
        <br />
        <br />
        <button id="welcome_button" onClick={navigateToFAQ}>Get Started</button>
      </center>
    </div>
  );
}


export default WelcomeSlide;
