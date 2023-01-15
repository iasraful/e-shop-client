/** @format */

import React from "react";
import "./Contact.scss";

import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  Pinterest,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <p>BE IN TOUCH WITH US:</p>
      <div className="join-email">
        <input type="email" placeholder="Enter your email" />
        <button>JOIN US</button>
      </div>
      <div className="icons">
        <Facebook />
        <Instagram />
        <Twitter />
        <Google />
        <Pinterest />
      </div>
    </div>
  );
};
export default Contact;
