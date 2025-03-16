import React from "react";
import { Avatar, Button, Tag } from "antd";
import { MailOutlined, InstagramOutlined, PhoneOutlined } from "@ant-design/icons";
import {useSelector} from "react-redux"
import coachProfile from "../assets/coachProfile.png";

const CoachProfile = () => {
  const selectedCoach = useSelector((state) => state.selectedCoach.selectedCoach)

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-900 text-white p-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-900 opacity-20"></div>
      <div className="relative w-full max-w-3xl text-center p-6">
        <div className="relative w-40 h-40 mx-auto mb-4">
          <Avatar size={160} src={coachProfile} className="border-4 border-white" />
        </div>
        <h2 className="text-3xl font-bold">{selectedCoach.name}</h2>
        <p className="text-gray-400 text-lg">Brazilian Jiu-Jitsu Coach</p>
        <div className="mt-4 text-gray-300 text-lg">
          <p>
            Belt: {selectedCoach.belt_level}
          </p>
        </div>
        <div className="mt-4 text-gray-300 text-lg">
          <p>
            Achievements: {selectedCoach.achievements}
          </p>
        </div>
        
        <div className="mt-4 text-gray-300 text-lg">
          <p>
            {selectedCoach.bio}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mt-6 gap-3">
          <Tag color="blue">{selectedCoach.speciality}</Tag>
          <Tag color="cyan">Competition Prep</Tag>
        </div>
        
        <div className="mt-8 flex justify-center gap-6">
          <Button type="primary" shape="circle" icon={<MailOutlined />} className="bg-blue-600"/>
          <Button type="primary" shape="circle" icon={<InstagramOutlined />} className="bg-pink-600"/>
          <Button type="primary" shape="circle" icon={<PhoneOutlined />} className="bg-green-600"/>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;