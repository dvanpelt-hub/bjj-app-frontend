import React from "react";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import FeaturedCoaches from "../components/FeaturedCoaches";

const home = () => {
  return (
    <>
      <Welcome />
      <Specialties />
      <FeaturedCoaches />
    </>
  );
};

export default home;
