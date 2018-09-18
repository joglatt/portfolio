import React, { Component } from "react";
import Project from "./project.js";
import "../App.css";
import project1 from "../images/project1.PNG";
import project2 from "../images/project2.PNG";
import project3 from "../images/project3.PNG";
class Frame extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="Projects">
        <h2>Projects:</h2>
        <hr />
        {/* {projects.map(item => ( */}
          <Project item={projects[0]} src={project3} />
          <Project item={projects[1]} src={project2} />
          <Project item={projects[2]} src={project1} />
        {/* ))} */}
      </div>
    );
  }
}

export default Frame;
