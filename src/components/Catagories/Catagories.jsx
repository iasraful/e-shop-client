/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Catagories.scss";

const Catagories = () => {
  return (
    <div className="catagories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/9031629/pexels-photo-9031629.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="b and w femail"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/6616416/pexels-photo-6616416.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/14880105/pexels-photo-14880105.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Lady GAGA"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/8995989/pexels-photo-8995989.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/9007320/pexels-photo-9007320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/7249422/pexels-photo-7249422.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Japanies"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Catagories;
