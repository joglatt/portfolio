import React, { Component } from "react";
import Project from "./project.js";
import "../App.css";
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
