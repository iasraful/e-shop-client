/** @format */

import React from "react";
import Catagories from "../../components/Catagories/Catagories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Catagories />
      <FeaturedProducts type="Tranding" />
      <Contact />
    </div>
  );
}
export default Home;
