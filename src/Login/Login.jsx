import "./Login.css";

function Login() {
  return (
    <div id="parent_login">
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
    </div>
  );
}

export default Login;
