import React from "react";
import "./FAQ.css";
export default class FAQ extends React.Component {
  render() {
    return (
      <div id="FAQ">
        <br />
        <h1>Frequently Asked Questions</h1>
        <br />
        <br />
        <center>
          <div className="faq_btn">
            <button>1. What is MFLIX?</button>
            <p className="faq_drp_dwn">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              suscipit provident repellendus necessitatibus nihil? Ab magnam
              beatae nemo molestiae voluptas. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores distinctio commodi at quidem
              recusandae ratione dolor ipsum quasi eum aut?
            </p>
          </div>
          <br />
          <div className="faq_btn">
            <button>2. What plans can I choose?</button>
            <p className="faq_drp_dwn">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              fuga, doloremque perspiciatis aut odio facere accusamus. Labore
              rem deserunt quo! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum voluptatem ea unde libero. Eos placeat
              odit deserunt eaque aut non!
            </p>
          </div>
          <br />
          <div className="faq_btn">
            <button>3. How many devices can I use this on?</button>
            <p className="faq_drp_dwn">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              libero repellendus sequi vero dicta at unde ipsum, qui rem ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur eaque ut at veritatis! Officia delectus quod provident,
              unde fugiat similique.
            </p>
          </div>
          <br />
          <div className="faq_btn">
            <button>4. When can I cancel my Subscription</button>
            <p className="faq_drp_dwn">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              delectus quam modi sunt magni dolor doloribus recusandae nesciunt
              excepturi nulla! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Totam veritatis culpa error tenetur aliquam
              praesentium a nostrum iure aliquid cumque!
            </p>
          </div>
          <br />
          <div className="faq_btn">
            <button>
              5. Are there any hidden charges for deleting my subscription?
            </button>
            <p className="faq_drp_dwn">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              optio, excepturi ea aut nobis illo dolorum aperiam asperiores modi
              magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veniam et qui atque, accusantium assumenda aut deleniti? Facilis
              explicabo necessitatibus saepe.
            </p>
          </div>
        </center>
        <br />
      </div>
    );
  }
}
