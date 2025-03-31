import React from "react";
import { Avatar, Button, Tag } from "antd";
import {
  MailOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import coachProfile from "../assets/images/bjj_pics/adam_gi_4.jpeg";
import RequestModal from "./RequestModal";

const CoachProfile = () => {
  const selectedCoach = useSelector(
    (state) => state.selectedCoach.selectedCoach
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white p-6 relative">
      <div className="relative w-full max-w-3xl text-center p-6">
        <div className="relative mx-auto mb-12">
          <Avatar
            size={240}
            src={coachProfile}
            className="border-4 border-white"
          />
        </div>
        <h2 className="text-3xl font-bold">{selectedCoach.username}</h2>
        <p className="text-lg">Brazilian Jiu-Jitsu Coach</p>

        <div className="mt-4 text-lg">
          <p>{selectedCoach.coach_bio}</p>
        </div>
        <div className="flex flex-wrap justify-center mt-6 gap-3">
        {selectedCoach.expertise.length > 0 ? (
          selectedCoach.expertise.map((val) => {
            return <Tag color="blue" key={val}>{val}</Tag>;
          })
        ) : (
          <Tag color="cyan">Competition Prep</Tag>
        )}
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <Button
            type="primary"
            shape="circle"
            icon={<MailOutlined />}
            className="bg-blue-600"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<InstagramOutlined />}
            className="bg-pink-600"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<PhoneOutlined />}
            className="bg-green-600"
          />
        </div>
        <div>
          <RequestModal />
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
