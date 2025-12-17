import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { Dropdown, Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import HamburgerMenu from "./HamburgerMenu";
import LoginButton from "./LoginButton";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { access_token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const menuItems = [
    {
      key: "myAccount",
      icon: <UserOutlined />,
      label: <span onClick={() => navigate("/my-account")}>My Account</span>,
    },
    {
      key: "myRequests",
      icon: <InboxOutlined />,
      label: <span onClick={() => navigate("/requests")}>My Requests</span>,
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: <span onClick={""}>Settings</span>,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: <span onClick={handleLogout}>Sign Out</span>,
    },
  ];

  return (
    <div className="flex items-center justify-between p-4">
      <HamburgerMenu />
      <Link to="/">
        <h1 className="text-2xl text-white font-bold font-home-video italic">
          Jiu Jitsu App
        </h1>
      </Link>
      {access_token /* check if user is logged in to determine render */ ? (
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
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Header;
