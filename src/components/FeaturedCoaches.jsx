import React from "react";
import { Image } from "antd";
import Coach from "../assets/images/coach.png";

const FeaturedCoaches = () => {
  return (
    <div>
      <h3>Featured Coaches</h3>
      <ul className="flex justify-around mb-10">
        <li className="bg-[#2C3033] m-2 text-sm">
          <Image src={Coach} />
        </li>
        <li className="bg-[#2C3033] m-2">
          <Image src={Coach} />
        </li>
        <li className="bg-[#2C3033] m-2">
          <Image src={Coach} />
        </li>
        <li className="bg-[#2C3033] m-2">
          <Image src={Coach} />
        </li>
      </ul>
    </div>
  );
};

export default FeaturedCoaches;
