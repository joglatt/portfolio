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
          I am a full stack web developer located in the New York area. I have
          experience building MERN stack web applications. Currently, I am
          refining the skills within my stack but would relish the opportunity
          to learn new technologies. I possess a good understanding of vanilla
          Javascript fundamentals so I am able to efficently learn new
          frameworks and libraries.
        </p>
        <br />
        <p>
          As a thinker, I am process driven and foucsed, methodically planning
          projects and analyzing problems. Rather than rushing to a complex
          solution or new tool that may or may not be neccessary, I try to focus
          on a minimum viable product before attempting to improve and add
          functionality.
        </p>
      </div>
    </div>
  );
};

export default Bio;
