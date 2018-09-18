import React from "react";
import "../App.css";
const Contact = () => {
  return (
    <div id="Contact">
      <h1>Contact Me</h1>
      <hr />
      <form action="https://formspree.io/joglatt@gmail.com" method="POST">
        <input type="name" name="name" placeholder="Name" />
        <br />
        <input type="email" name="_replyto" placeholder="Email Address" />
        <textarea
          type="text"
          name="message"
          placeholder="Please enter your message here"
          style={{ height: "200px", width: "100%" }}
        />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
