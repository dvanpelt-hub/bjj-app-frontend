import React from "react";
import { Link } from "react-router";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Link to="/">
        <h1 className="text-2xl text-white font-bold font-home-video">BJJ Review</h1>
      </Link>
      <UserOutlined />
    </div>
  );
};

export default Header;
