import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./SignUp.css";

function CreateAcc() {
  const navigate = useNavigate();
  const navigateToPlans = () => {
    navigate("/plans");
  };
    return (
      <div id="signup">
        <div id="signup_form">
            <br />
          <h1 >Sign Up</h1>
          <br />
          <center>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
              autofocus
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              required
            />
            <br />
            <br />
            <br />
            <button onClick={navigateToPlans}>Sign Up</button>
            </center>
        </div>
      </div>
    );
}
function SignUp(){
  return (
    <div>
    <Navbar/>
    <CreateAcc/>
    </div>
  )
}
export default SignUp;
