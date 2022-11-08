import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./SignUp.css";
import React, { useState } from "react";

function CreateAcc() {
  const navigate = useNavigate();
  const navigateToPlans = () => {
    navigate("/plans");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <div id="signup">
      <form id="signup_form">
        <br />
        <h1>Sign Up</h1>
        <br />
        <center>
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
            autoFocus
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {/* {username} */}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* {password} */}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
          />
          <br />
          {/* {confirm} */}
          <br />
          <br />
          <button onClick={navigateToPlans}>Sign Up</button>
        </center>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div>
      <Navbar />
      <CreateAcc />
    </div>
  );
}
export default SignUp;
