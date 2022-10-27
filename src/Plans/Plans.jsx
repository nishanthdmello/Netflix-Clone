import React from "react";
import "./Plans.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"

class Plans extends React.Component {
  render() {
    return (
      <div className="planpage">
        <center>
          <table>
            <caption>Mflix Plans</caption>
            <tr>
              <th>Mobile</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
            <tr>
              <td>
                <p>✔️ Watch on 1 mobile at a time</p>
              </td>
              <td>
                <p>✔️ Watch on 1 supported device at a time</p>
              </td>
              <td>
                <p>✔️ Watch on 2 supported devices at a time</p>
              </td>
              <td>
                <p>✔️ Watch on 4 supported devices at a time</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>✓ Unlimited movies, TV shows, and mobile games</p>
              </td>
              <td>
                <p>✓ Unlimited movies, TV shows, and mobile games</p>
              </td>
              <td>
                <p>✓ Unlimited movies, TV shows, and mobile games</p>
              </td>
              <td>
                <p>✓ Unlimited movies, TV shows, and mobile games</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>✓ Ad-free TV shows and movies</p>
              </td>
              <td>
                <p>✓ Ad-free TV shows and movies</p>
              </td>
              <td>
                <p>✓ Ad-free TV shows and movies</p>
              </td>
              <td>
                <p>✓ Ad-free TV shows and movies</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>✓ Download on 1 mobile device at a time</p>
              </td>
              <td>
                <p>✓ Download on 1 supported device at a time</p>
              </td>
              <td>
                <p>✓ Download on 2 supported devices at a time</p>
              </td>
              <td>
                <p>✓ Download on 4 supported devices at a time</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Resolution:480px</p>
              </td>
              <td>
                <p>Resolution: HD</p>
              </td>
              <td>
                <p>Resolution: Full HD</p>
              </td>
              <td>
                <p>Resolution: Ultra HD</p>
              </td>
            </tr>
            <tr>
              <td>Pay ₹149</td>
              <td>Pay ₹249</td>
              <td>Pay ₹349</td>
              <td>Pay ₹449</td>
            </tr>
          </table>
          <p className="mobile-mirror-note">
            <b>NOTE:</b>Casting or Mirroring is not supported on the Mobile Plan
          </p>
        </center>
      </div>
    );
  }
}

export default function Plans1() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <br />
      <Plans />
      <Footer />
    </div>
  );
}
