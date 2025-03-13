import React from "react";
import { Link } from "react-router";
import { Image } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/filterSlice";
import Cat1 from "../assets/Cat1.png";
import Cat2 from "../assets/Cat2.png";
import Cat3 from "../assets/Cat3.png";

const Specialties = () => {
  const dispatch = useDispatch();

  const handleSpecialty = (val) => {
    dispatch(setFilter(val));
  };

  return (
    <div>
      <h3>Specialties</h3>
      <ul className="flex justify-around">
        <Link
          to="/search-coaches"
          className="bg-[#2C3033] m-2"
          onClick={() => handleSpecialty("gi")}
        >
          <Image src={Cat1} className="w-full h-full"></Image>Gi
        </Link>
        <Link
          to="/search-coaches"
          className="bg-[#2C3033] m-2"
          onClick={() => handleSpecialty("no-gi")}
        >
          <Image src={Cat2} className="w-full h-full"></Image>No-Gi
        </Link>
        <Link
          to="/search-coaches"
          className="bg-[#2C3033] m-2"
          onClick={() => handleSpecialty("leg-locks")}
        >
          <Image src={Cat3} className="w-full h-full"></Image>Leg Locks
        </Link>
        <Link
          to="/search-coaches"
          className="bg-[#2C3033] m-2"
          onClick={() => handleSpecialty("takedowns")}
        >
          <Image src={Cat1} className="w-full h-full"></Image>Takedowns
        </Link>
      </ul>
    </div>
  );
};

export default Specialties;
