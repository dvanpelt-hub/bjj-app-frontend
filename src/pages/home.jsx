import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import FeaturedCoaches from "../components/FeaturedCoaches";

const home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Specialties />
      <FeaturedCoaches />
    </div>
  );
};

export default home;
