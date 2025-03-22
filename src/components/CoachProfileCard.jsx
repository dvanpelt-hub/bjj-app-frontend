import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCoach } from "../redux/slices/selectedCoachSlice";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CoachProfileCard = (props) => {
  const { image, id, coachInfo } = props;
  const dispatch = useDispatch()

  return (
    <Card
      className="!border-none !max-w-sm !mx-auto !bg-black !shadow-[-3px_3px_3px_1px_#616161] !rounded-2xl !overflow-hidden !text-white"
      key={id}
      onClick={() => dispatch(setSelectedCoach(username))}
    >
      <div className="flex flex-col items-center p-6">
        <Avatar
          size={200}
          src={image}
          icon={!image && <UserOutlined />}
          className="!border-2 !border-gray-300 !shadow-md"
        />
        <h2 className="text-xl font-semibold mt-4 text-white">{coachInfo.username}</h2>
        <p className="text-white text-center mt-2 text-sm">{coachInfo.bio}</p>
        <p>
          <b>Achievements:</b> {coachInfo.achievement}
        </p>
        <p>
          <b>Speciality:</b> {coachInfo.speciality}
        </p>
        <p>
          <b>Belt:</b> {coachInfo.belt}
        </p>
        <p className="text-white">${coachInfo.price_per_feedback}</p>
      </div>
    </Card>
  );
};

export default CoachProfileCard;
