import React from "react";
import Res from "../../assets/resume/Resume.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container normal-case text-xl">
      <h1 className="resume-heading">Resume</h1>
      <div className="resume">
        <a className="btn" href={Res} target="none">
          Click here to download my Resume
        </a>
      </div>
    </div>
  );
}
