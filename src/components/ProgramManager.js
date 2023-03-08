import React from "react";
import "./ProgramManager.css";

export default function () {
  return (
    <div className="ProgramManagerContainer">
      <header>
        <div className="ProManHeader">
          <img />
          <p>Program Manager</p>
          <img />
          <img />
        </div>
        <div>
          <ul className="subHeader">
            <li>
              <u>F</u>ile
            </li>
            <li>
              <u>O</u>ptions
            </li>
            <li>
              <u>W</u>indow
            </li>
            <li>
              <u>H</u>elp
            </li>
          </ul>
        </div>
        <div className="Border">
          <div className="MainProManContainer">
            <img />
            <p>Main</p>
            <img />
            <img />
          </div>
          <div>
            <p>Imgs/Skills here</p>
          </div>
        </div>
      </header>
    </div>
  );
}
