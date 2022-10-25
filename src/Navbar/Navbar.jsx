import "./Navbar.css";
import logo from "/home/nishanth/wt_project-1/src/images/Mflix_Brand_Logo2.png";

function Navbar() {
  return (
    <div id="navbar">
      <img src={logo} alt="logo" />
      <button>Sign In</button>
    </div>
  );
}
export default Navbar;
