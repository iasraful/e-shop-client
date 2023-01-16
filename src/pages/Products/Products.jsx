/** @format */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";

function Products() {
  const cartId = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1 ">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="1 ">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="1 ">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By </h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="Price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="Price"
              onChange={(e) => setSort("dsc")}
            />
            <label htmlFor="desc">Price (Height First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="cartImg"
          src="https://images.pexels.com/photos/13262233/pexels-photo-13262233.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Flowers with girl"
        />
        <List cartId={cartId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}
export default Products;
