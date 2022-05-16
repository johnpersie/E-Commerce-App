import React from "react";
import Announcement from "../../components/announcement";
import Categories from "../../components/categories";
import NavBar from "../../components/navBar";
import Products from "../../components/products";
import Slider from "../../components/slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
