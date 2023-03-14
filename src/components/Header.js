import React from "react";
import "./Header.css";
import randomFacts from "../randomFacts";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [partyMode, setPartyMode] = React.useState(true);
  const [facts, setFacts] = React.useState("");

  function partyModeBtn() {
    setPartyMode((prevState) => !prevState);
  }

  function getRandomFact() {
    const factsArray = randomFacts;
    const randomNumber = Math.floor(Math.random() * factsArray.length);
    setFacts(factsArray[randomNumber]);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(getRandomFact());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="allHeader">
        <div className="topBar">
          <span className="randomFacts">{partyMode ? "hello" : facts}</span>
          <button onClick={partyModeBtn} className="partyBtn">
            {partyMode ? "Party Mode" : "Boring Mode"}
          </button>
        </div>
        <div className="mainHeader">
          <h1>AJC</h1>
          <ul className="navContainer">
            <NavLink to="/">
              <span class="material-symbols-outlined">
                home<div className="iconName">Home</div>
              </span>
            </NavLink>
            <NavLink to="/about">
              <span class="material-symbols-outlined">
                info<div className="iconName">About</div>
              </span>
            </NavLink>
            <NavLink to="/projects">
              <span class="material-symbols-outlined">
                receipt_long<div className="iconName">Projects</div>
              </span>
            </NavLink>
            <span class="material-symbols-outlined">
              connect_without_contact<div className="iconName">Contact</div>
            </span>
          </ul>
        </div>
      </header>
    </>
  );
}
