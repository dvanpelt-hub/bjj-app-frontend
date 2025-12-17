import React from "react";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const userInfo = useSelector((state) => state.auth);
  console.log(userInfo)
  return (
    <div className="min-h-screen flex flex-col text-white">
      <p className="mt-10">My Account: {userInfo.user}</p>
    </div>
  );
};

export default MyAccount;
