/** @format */

import React, { useState } from "react";
import "./Product.scss";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [
    "https://images.pexels.com/photos/9324653/pexels-photo-9324653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14318107/pexels-photo-14318107.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="Men" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="Women" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
export default Product;
