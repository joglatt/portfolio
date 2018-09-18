import React, { Component } from "react";
import linkedIn from "./images/linkedin.png";
import github from "./images/github.png";
class Footer extends Component {
  render() {
    return (
      <div id="Footer">
        <div id="Logos">
          <a href="https://github.com/joglatt">
            <img
              className="footerLink"
              src={github}
              alt="github repo"
            />
          </a>
          <a href="https://www.linkedin.com/in/joshua-glatt-99113642/">
            <img
              className="footerLink"
              src={linkedIn}
              alt="linkedin profile"
            />
          </a>
        </div>
        <div id="Cr">Copyright Josh Glatt 2018 &#169;</div>
      </div>
    );
  }
}

export default Footer;
