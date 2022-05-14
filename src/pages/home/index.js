import React from "react";
import Announcement from "../../components/announcement";
import NavBar from "../../components/navBar";
import Slider from "../../components/slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
    </div>
  );
};

export default Home;
