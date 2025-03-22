import React from "react";
import { Link } from "react-router";
import { Dropdown, Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // dispatch(logout());
    navigate("/login");
  };

  const menuItems = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: <span onClick={handleLogout}>Sign Out</span>,
    },
  ];

  return (
    <div className="flex items-center justify-between p-4">
      <Link to="/">
        <h1 className="text-2xl text-white font-bold font-home-video">
          Re:Roll
        </h1>
      </Link>
      <Dropdown
        menu={{ items: menuItems }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Avatar
          size="medium"
          icon={<UserOutlined />}
          style={{
            cursor: "pointer",
          }}
        />
      </Dropdown>
    </div>
  );
};

export default Header;
