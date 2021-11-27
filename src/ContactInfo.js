import React, { Component } from "react";
import "./ResStyle.css";

export class ContactInfo extends Component {
  render() {
    return (
      <div>
        <h3 className="skills"> Contact </h3>
        <div className="techy">
          <div className="row1">
            <input type="text" className="row2" placeholder="Your Name" />
          </div>
          <div className="row1">
            <input type="text" className="row2" placeholder="E-Mail" />
          </div>
          <div className="row1">
            <textarea type="text" className="row2" placeholder="Your Message" />
          </div>
          <div className="sub">
            <button type="submit" class="btn btn-primary" id="">Send
            </button>
          </div>
        </div>
        <div className="techy1">
          <div>
            <h6>Address</h6>
            <p>500, NarayanaRao Peta, Atmakur,Nellore(dt.)</p>
          </div>
          <div>
            <h6>Phone</h6>
            <p>8374630264</p>
          </div>
          <div>
            <h6>E-Mail</h6>
            <p>Narayana.bojja@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
