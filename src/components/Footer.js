import React from "react";
import "./Footer.css";
import LinkedIn from "../images/linkedin.png";
import Github from "../images/github.png";
import Youtube from "../images/youtube.png";

export default function Footer() {
  return (
    <div className="test">
      <ul className="footerContainer">
        <img className="linkedInImg footerImg" src={LinkedIn} />
        <img className="gitHubImg footerImg" src={Github} />
        <img className="youTubeImg footerImg" src={Youtube} />
      </ul>
    </div>
  );
}
