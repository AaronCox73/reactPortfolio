import React from "react";
import "./Header.css";
import randomFacts from "../randomFacts";

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

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(getRandomFact());
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

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
