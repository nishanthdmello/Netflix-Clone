import React from 'react'
import "./FAQ.css";
export default class FAQ extends React.Component {
    render() {
      return (
        <div id="FAQ">
          <h1>Frequently Asked Questions</h1>
          <br />
          <br />
          <center>
            <button>1. What is MFLIX?</button>
            <br />
            <button>2. What plans can I choose?</button>
            <br />
            <button>3. How many devices can I use this on?</button>
            <br />
            <button>4. When can I cancel my Subscription</button>
            <br />
            <button>
              5. Are there any hidden charges for deleting my subscription?
            </button>
          </center>
        </div>
      );
    }
  }
  