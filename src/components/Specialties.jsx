import React from "react";
import { Link } from "react-router";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/filterSlice";
import GiImage1 from "../assets/images/bjj_pics/adam_gi_5.jpeg";
import CompImage1 from "../assets/images/bjj_pics/adam_gi_2.jpeg";
import LegLocksImage1 from "../assets/images/bjj_pics/leg-lock-1.jpeg";
import NoGiImage1 from "../assets/images/bjj_pics/adam_no_gi_1.jpeg";
import CategoryCard from "./CategoryCard";

const Specialties = () => {
  const dispatch = useDispatch();

  const handleSpecialty = (val) => {
    dispatch(setFilter(val));
  };

  return (
    <div>
      <h3 className="text-2xl mb-12">Specialties</h3>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={8}>
          <Link to="/search-coaches" onClick={() => handleSpecialty("gi")}>
            <CategoryCard image={GiImage1} title="Gi" color={'white'} />
          </Link>
        </Col>
        <Col className="gutter-row" span={8}>
          <Link
            to="/search-coaches"
            onClick={() => handleSpecialty("comp prep")}
          >
            <CategoryCard image={CompImage1} title="Comp prep" color={'blue'} />
          </Link>
        </Col>
      </Row>
      <Row gutter={16} justify="space-around" className="mb-12">
        <Col className="gutter-row" span={8}>
          <Link
            to="/search-coaches"
            onClick={() => handleSpecialty("leg locks")}
          >
            <CategoryCard image={LegLocksImage1} title="Leg locks" color={'purple'} />
          </Link>
        </Col>
        <Col className="gutter-row" span={8}>
          <Link to="/search-coaches" onClick={() => handleSpecialty("no gi")}>
            <CategoryCard image={NoGiImage1} title="No-gi" color={'#49170a'} />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Specialties;
