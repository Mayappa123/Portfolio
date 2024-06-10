// src/components/Contact.jsx

import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact me</h2>
      <form action="">
        <div className="nameEmail">
          <div className="form-group one">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter firstname.."
              required
            />
          </div>
          <div className="form-group two">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Enter latsname.."
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "100px" }}
            required
          ></textarea>
        </div>
        <div className="button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
