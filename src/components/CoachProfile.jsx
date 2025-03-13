import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CoachProfileCard = ({ name, bio, image }) => {
  return (
    <Card
      className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center p-6">
        <Avatar
          size={100}
          src={image}
          icon={!image && <UserOutlined />}
          className="border-4 border-gray-300 shadow-md"
        />
        <h2 className="text-xl font-semibold mt-4 text-gray-800">{name}</h2>
        <p className="text-gray-600 text-center mt-2 text-sm">{bio}</p>
      </div>
    </Card>
  );
};

export default CoachProfileCard;
