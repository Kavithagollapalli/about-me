import React, { Component } from "react";
import "./ResStyle.css";
import pic from "./nary.jpg";

export class ResHeader extends Component {
  render() {
    return (
      <div className="headertop">
        <img src={pic} alt="Profile Pic" />
        <div>
          <h1 className="first">Narayana Bojja</h1>
          <h2>Full Stack Java Developer</h2>
        </div>
        <div className="icon-bar">
          <a
            href="https://www.facebook.com/BojjaNarayana"
            target="_blank"
            className="iconstyle"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" target="_blank" className="iconstyle">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" target="_blank" className="iconstyle">
            <i className="fa fa-google"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/narayanabojja"
            target="_blank"
            className="iconstyle"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default ResHeader;
