import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import FeaturedCoachesCard from "./FeaturedCoachesCard";
import { getSelectedCoach } from "../redux/slices/selectedCoachSlice";
import { Row, Col } from "antd";
import Coach1 from "../assets/images/bjj_pics/adam_gi_1.jpeg";
import Coach2 from "../assets/images/bjj_pics/adam_no_gi_2.jpeg";
import Coach3 from "../assets/images/bjj_pics/adam_gi_4.jpeg";
import Coach4 from "../assets/images/bjj_pics/adam_no_gi_4.jpeg";

const FeaturedCoaches = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectedCoach = (username) => {
    dispatch(getSelectedCoach(username))
    navigate(`/coach/${username}`);
  };

  return (
    <div className="mb-10">
      <h3 className="text-2xl mb-10">Featured Coaches</h3>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <div onClick={() => handleSelectedCoach("CrisCyborg_26")}>
            <FeaturedCoachesCard
              coach={"Adam Hightower"}
              image={Coach1}
              color={"#1f2685"}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <div onClick={() => handleSelectedCoach("CrisCyborg_26")}>
            <FeaturedCoachesCard
              coach={"Ellis Adam"}
              image={Coach2}
              color={"#62109d"}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <div onClick={() => handleSelectedCoach("CrisCyborg_26")}>
            <FeaturedCoachesCard
              coach={"Dark Hightower"}
              image={Coach3}
              color={"#49170a"}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <div onClick={() => handleSelectedCoach("CrisCyborg_26")}>
            <FeaturedCoachesCard
              coach={"Ellis Chokem"}
              image={Coach4}
              color={"black"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCoaches;
