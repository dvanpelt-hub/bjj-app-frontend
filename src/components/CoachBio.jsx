import React from "react";
import { useSelector } from "react-redux";

const CoachBio = () => {
  const specialty = useSelector((state) => state.filter.specialty);
  return (
    <div>
      <p>Coach: {specialty}</p>
    </div>
  );
};

export default CoachBio;
