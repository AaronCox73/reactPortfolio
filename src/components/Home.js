import React from "react";
import BackGroundImg from "../images/microsoftbackground.jpeg";
import "./Home.css";
import ProgramManager from "./ProgramManager";

export default function Home() {
  return (
    <div>
      <div className="homeContainer">
        <div className="centered">
          <h1>Aaron Jefferson Cox</h1>
          <h4>Web Developer</h4>
        </div>
        <img className="BackgroundImg" src={BackGroundImg} />
      </div>
      <ProgramManager />
    </div>
  );
}
