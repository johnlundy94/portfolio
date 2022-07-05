import React from "react";
import Res from "../../assets/resume/Resume.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container normal-case text-xl">
      <h1>Resume</h1>
      <div>
        <address className="resume normal-case text-xl">
          <a href={Res}>Click here to download my Resume</a>
        </address>
      </div>
    </div>
  );
}
