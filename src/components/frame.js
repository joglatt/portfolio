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
        {projects.map(item => (
          <Project item={item} />
        ))}
      </div>
    );
  }
}

export default Frame;
