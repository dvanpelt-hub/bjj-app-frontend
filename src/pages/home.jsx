import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import FeaturedCoaches from "../components/FeaturedCoaches";
import CoachData from "../assets/sampleData/bjj_coaches_with_pics.json";
import { setCoaches } from "../redux/slices/coachesSlice";

const home = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth)
  console.log(userInfo)

  const handleLoadCoachData = () => {
    dispatch(setCoaches(CoachData));
  };

  useEffect(() => {
    handleLoadCoachData();
  }, []);

  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate('/login');
  // }

  return (
    <>
      <Welcome />
      <Specialties />
      <FeaturedCoaches />
    </>
  );
};

export default home;
