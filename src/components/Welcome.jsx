import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import HomeLogo from "../assets/HomeLogo.png";

const Welcome = () => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center justify-start items-center flex"
      style={{ backgroundImage: `url(${HomeLogo})` }}
    >
      <Link to="/search-coaches">
        <Button
          type="primary"
          className="ml-2 mt-30 !bg-[#6dfffd] !text-black !font-bold !border-none !shadow-2xl"
        >
          Find coaches
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;
