/** @format */

import React from "react";
import Catagories from "../../components/Catagories/Catagories";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Catagories />
      <FeaturedProducts type="Tranding" />
    </div>
  );
}
export default Home;
