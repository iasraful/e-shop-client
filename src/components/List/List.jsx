/** @format */

import React from "react";
import Cart from "../Cart/Cart";
import "./List.scss";

function List() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/45924/pexels-photo-45924.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Graphic Sutes",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4937449/pexels-photo-4937449.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long T-shirt",
      isNew: true,
      oldPrice: 29,
      price: 22,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1306246/pexels-photo-1306246.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/9760251/pexels-photo-9760251.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Mens Mart",
      isNew: true,
      oldPrice: 55,
      price: 42,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/45924/pexels-photo-45924.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Graphic Sutes",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/4937449/pexels-photo-4937449.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long T-shirt",
      isNew: true,
      oldPrice: 29,
      price: 22,
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/1306246/pexels-photo-1306246.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/9760251/pexels-photo-9760251.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Mens Mart",
      isNew: true,
      oldPrice: 55,
      price: 42,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Cart item={item} key={item.id} />
      ))}
    </div>
  );
}
export default List;
