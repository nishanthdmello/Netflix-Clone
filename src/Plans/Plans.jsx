import React from "react";
// import "./Plans.css";

class Plans extends React.Component {
  render() {
    return (
      <div className="planpage">
        <p>
          Mflix offers a wide variety of plans to choose from to meet your
          entertainment needs. <br />
          As Mflix member, you are charged on a monthly basis from the date you
          signed up. Number of devices you can share the account with will
          depend on the subscription plan. Higher the plan, more the devices
          that can share.
        </p>
        <br />
        <b>Netflix Plans</b>
        <table>
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
      </div>
    );
  }
}

export default Plans;
