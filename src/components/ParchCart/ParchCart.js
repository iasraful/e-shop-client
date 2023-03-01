/** @format */

import React from "react";
import "./ParchCart.scss";
import { DeleteOutline } from "@mui/icons-material";

export default function ParchCart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      desc: "A Good Long Sleeve Graphic T-shirt loem3 ikkl lai love ahen dao kkok adf fiuhla;",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/45924/pexels-photo-45924.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Graphic Sutes",
      desc: "A Good Long Sleeve Graphic T-shirt loem3 ikkl lai love ahen dao kkok adf fiuhla;",

      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="parchCart">
      <h1>Produce Your Cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="Product Cart Img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 69)}</p>
            <div className="price">1 x $ {item.price}</div>
          </div>
          <DeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Sub-total</span>
        <span>$123</span>
      </div>
      <button>Proceed Checkout</button>
      <span className="reset">Reset</span>
    </div>
  );
}
