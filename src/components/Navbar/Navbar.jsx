/** @format */

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIconIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            E-Store
          </Link>
        </div>
        <div className="right">
          <div className="right">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="right">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="right">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="right">
            <Link className="link" to="/store">
              Store
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIconIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
