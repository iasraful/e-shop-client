/** @format */

import React from "react";

function Product() {
  const images = [
    "https://images.pexels.com/photos/9324653/pexels-photo-9324653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14318107/pexels-photo-14318107.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="Men" />
          <img src={images[1]} alt="Women" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
export default Product;
