import React, { Component } from "react";
import "../App.css";

class Project extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="P-frame">
        <a href={item.href}>
          <img
           className="Link"
            src={item.src}
            alt={item.name}
            key={item.id}
          />
        </a>
        <div className="Desc">
          <h3>{item.name}</h3>
          <hr />
          <p>{item.text}</p>
          <a href={item.github}>{item.github}</a>
        </div>
      </div>
    );
  }
}

export default Project;
