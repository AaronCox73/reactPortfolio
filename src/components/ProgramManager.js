import React from "react";
import "./ProgramManager.css";

export default function () {
  return (
    <div className="ProgramManagerContainer">
      <header>
        <div className="ProManHeader">
          <img />
          <p>Program Manager</p>
          <p className="exit">
            <b>X</b>
          </p>
          <img />
        </div>
        <div>
          <ul className="subHeader">
            <li>
              <u>R</u>esume
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
          <div className="MainProManContainer ProManHeader">
            <p>Main Skills</p>
            <p className="exit">
              <b>X</b>
            </p>
          </div>
          <div className="Iconimgs">
            <span class="material-symbols-outlined">
              handyman
              <div>
                Hard<div>working</div>
              </div>
            </span>
            <span class="material-symbols-outlined">
              chat
              <div>Communication</div>
            </span>
            <span class="material-symbols-outlined">
              alarm
              <div>Timely</div>
            </span>
            <span class="material-symbols-outlined">
              fitness_center
              <div>Perseverance</div>
            </span>
            <span class="material-symbols-outlined">
              support_agent
              <div>
                Customer<div>Service</div>
              </div>
            </span>
            <span class="material-symbols-outlined">
              handshake
              <div>Honest</div>
            </span>
            <span class="material-symbols-outlined">
              surfing
              <div>
                Easy <div>Going</div>
              </div>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
