/** @format */

import React, { useState } from "react";
import "./Product.scss";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
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
      <div className="right">
        <h2>Titel</h2>
        <span>$ 199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odit
          illo reprehenderit quidem sequi doloremque nam se culpa consectetur,
          soluta et esse repellat a minus quis, omnis numquam possimus aperiam!
          Voluptates, deleniti expedita?
        </p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : -1))
            }
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            +
          </button>
        </div>
        <div className="addToCart">
          <button>
            <AddShoppingCart />
            Add To Cart
          </button>
          <div className="link">
            <div className="item">
              <FavoriteBorder /> ADD TO WISH LIST
            </div>
            <div className="item">
              <Balance /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: Tshirt, Woman, Top</span>
          </div>
          <hr />
          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />

            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
