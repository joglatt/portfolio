import React, { Component } from "react";
import Frame from "./components/frame.js";
import Bio from "./components/bio.js";
import Contact from "./components/contact.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "./App.css";
import projects from "./data.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Frame">
          <Bio />
          <Frame projects={projects} />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
