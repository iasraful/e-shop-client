/** @format */

import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shows</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Link</h1>
          <span>Faq</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            possimus expedita quae officia voluptatibus blanditiis nulla tempore
            obcaecati praesentium asperiores, ex vero iusto esse quo illo sequi
            consequuntur voluptatem sunt.
          </span>
        </div>
        <div className="item">
          <h1> Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            possimus expedita quae officia voluptatibus blanditiis nulla tempore
            obcaecati praesentium asperiores, ex vero iusto esse quo illo sequi
            consequuntur voluptatem sunt.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">E-Store</span>
          <span className="copyright">
            © Copyright {new Date().getFullYear()}
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}
