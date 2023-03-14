import React from "react";
import "./About.css";
export default function About() {
  return (
    <div>
      <div className="AboutContainer">
        <div className="AboutHeader">
          <img />
          <p>System Message</p>
          <p className="exit">
            <b>X</b>
          </p>
          <img />
        </div>
        <div>
          <div className="btnPlacement">
            <div className="fakeBtn">OK</div>
            <div className="fakeBtn">Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
}
