import React from "react";
import "./Header.css";

export default function Header() {
  function partyMode() {
    alert("are you sure you want to party?");
  }

  return (
    <>
      <header className="allHeader">
        <div className="topBar">
          <span className="randomFacts">Random AJ facts here</span>
          <button onClick={partyMode} className="partyBtn">
            Party Mode
          </button>
        </div>
        <div className="mainHeader">
          <h1>AJC</h1>
          <ul className="navContainer">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  );
}
