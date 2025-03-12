import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import CoachBio from "../components/CoachBio";

const Coach = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <CoachBio coachID={id} />
    </div>
  );
};

export default Coach;
