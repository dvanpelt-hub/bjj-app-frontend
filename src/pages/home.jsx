import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import FeaturedCoaches from "../components/FeaturedCoaches";
import CoachData from "../assets/sampleData/bjj_coaches_with_pics.json";
import { setCoaches } from "../redux/slices/coachesSlice";
import Login from "../components/Login";

const home = () => {
  const dispatch = useDispatch();

  const handleLoadCoachData = () => {
    dispatch(setCoaches(CoachData));
  };

  useEffect(() => {
    handleLoadCoachData();
  }, []);

  return (
    <div>
       {/* <>
          <Welcome />
          <Specialties />
          <FeaturedCoaches />
        </> */}
    
          <Login />
    </div>
  );
};

export default home;
