import React from "react";
import "../App.css";
import headShot from "../images/headshot.png";
const Bio = () => {
  return (
    <div id="Bio">
      <img id="HeadShot" src={headShot} alt="head shot" />
      <hr />
      <div id="textBox">
        <h3>About Me</h3>
        <p>
          I am a full stack web developer located in the New York area with
          experience building full stack web applications. Currently, I am
          refining my MERN stack (MongoDB, Express, React, and Node) skills but would
          relish the opportunity to learn new technologies. I possess a good
          understanding of vanilla Javascript fundamentals so I find I am able
          to efficently learn new frameworks and libraries.
        </p>
        <p>
          As a thinker, I am process driven and focused, methodically planning
          projects and analyzing problems. Rather than rushing to a complex
          solution or new tool that may or may not be neccessary, I attempt to
          answer the fundamental problems with as basic a solution as possible.
        </p>
      </div>
    </div>
  );
};

export default Bio;
