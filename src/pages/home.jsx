import React, {useEffect} from "react";
import {useDispatch} from "react-redux"
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import FeaturedCoaches from "../components/FeaturedCoaches";
import CoachData from "../assets/bjj_coaches_with_pics.json"
import {setCoaches} from "../redux/slices/coachesSlice"

const home = () => {
  
const dispatch = useDispatch()

const handleLoadCoachData = () => {
  dispatch(setCoaches(CoachData))
}

useEffect(() => {
  handleLoadCoachData()
}, [])

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
