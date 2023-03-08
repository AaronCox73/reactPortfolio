import React from "react";
import "./Footer.css";
import LinkedIn from "../images/linkedin.png";
import Github from "../images/github.png";
import Youtube from "../images/youtube.png";

export default function Footer() {
  return (
    <div>
      <div className="test">
        <ul className="footerContainer">
          <div className="FooterHeader">
            <div className="FooterImgContainer">
              <p>Linkedin</p>
            </div>
            <div className="innerBtn">
              <img className="linkedInImg footerImg" src={LinkedIn} />
            </div>
          </div>
          <div className="FooterHeader">
            <div className="FooterImgContainer">
              <p>Github</p>
            </div>
            <div className="innerBtn">
              <img className="gitHubImg footerImg" src={Github} />
            </div>
          </div>
          <div className="FooterHeader">
            <div className="FooterImgContainer">
              <p>Youtube</p>
            </div>
            <div className="innerBtn">
              <img className="youTubeImg footerImg" src={Youtube} />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
