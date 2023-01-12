/** @format */

import React from "react";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Tranding" />
    </div>
  );
}
export default Home;
