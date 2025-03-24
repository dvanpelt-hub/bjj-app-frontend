import React from "react";
import { Link } from "react-router";
import { Row, Col } from "antd";
import Coach1 from "../assets/images/bjj_pics/adam_gi_1.jpeg";
import Coach2 from "../assets/images/bjj_pics/adam_no_gi_2.jpeg";
import Coach3 from "../assets/images/bjj_pics/adam_gi_4.jpeg";
import Coach4 from "../assets/images/bjj_pics/adam_no_gi_4.jpeg";
import FeaturedCoachesCard from "./FeaturedCoachesCard";

const FeaturedCoaches = () => {
  return (
    <div className="mb-40">
      <h3 className="text-2xl mb-10">Featured Coaches</h3>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <Link to="/search-coaches" onClick={() => handleSelectedCoach(val)}>
            <FeaturedCoachesCard coach={"Adam Hightower"} image={Coach1} />
          </Link>
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <Link to="/search-coaches" onClick={() => handleSelectedCoach(val)}>
            <FeaturedCoachesCard coach={"Ellis Adam"} image={Coach2} />
          </Link>
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <Link to="/search-coaches" onClick={() => handleSelectedCoach(val)}>
            <FeaturedCoachesCard coach={"Dark Hightower"} image={Coach3} />
          </Link>
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={16}>
          <Link to="/search-coaches" onClick={() => handleSelectedCoach(val)}>
            <FeaturedCoachesCard coach={"Ellis Chokem"} image={Coach4} />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCoaches;
