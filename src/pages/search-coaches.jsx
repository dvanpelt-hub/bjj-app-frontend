import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearFilter } from "../redux/slices/filterSlice";
import { Link } from "react-router";
import { Input, Tag } from "antd";
import CoachProfileCard from "../components/CoachProfileCard";
import coachProfile from "../assets/images/bjj_pics/adam_gi_4.jpeg";
import { getAllCoaches } from "../redux/slices/coachesSlice";
import Spinner from "../components/Spinner";

const { Search } = Input;

const searchCoaches = () => {
  const coachSpecialty = useSelector((state) => state.filter.specialty);
  const coaches = useSelector((state) => state.coaches.coaches);
  const spinnerStatus = useSelector((state) => state.coaches.loading);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  // const { access_token } = useSelector((state) => state.auth);

  useEffect(() => {
    // if (access_token) { // is this needed?
    dispatch(getAllCoaches());
    // }
  }, []);

  const filteredCoaches =
    // checks search name, search category, or selected category
    searchTerm.length > 0 || coachSpecialty.length > 0
      ? coaches.filter(
          (coach) =>
            (searchTerm.length > 0
              ? coach.username.toLowerCase().includes(searchTerm.toLowerCase())
              : null) ||
            (searchTerm.length > 0
              ? coach.expertise &&
                coach.expertise.includes(searchTerm.toLowerCase())
              : null) ||
            (coachSpecialty.length > 0 && coach.expertise
              ? coach.expertise.includes(coachSpecialty)
              : null)
        )
      : coaches;

  const handleRemoveTag = () => {
    dispatch(clearFilter());
  };

  const renderTags = (tag) => {
    if (tag.length > 0) {
      return (
        <Tag
          closeIcon
          style={{ marginBottom: 12, padding: 8 }}
          onClose={() => handleRemoveTag()}
        >
          {tag}
        </Tag>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Coach Listings</h1>
      {/* Search Bar */}
      <Search
        placeholder="Search coaches..."
        allowClear
        enterButton="Search"
        size="large"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      {renderTags(coachSpecialty)}
      {/* coach Grid */}
      {spinnerStatus ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-2r sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCoaches.length > 0 ? (
            filteredCoaches.map((coach) => (
              <Link to={`/coach/${coach.username}`} key={coach.user_id}>
                <CoachProfileCard
                  key={coach.username}
                  image={coachProfile}
                  coachInfo={coach}
                />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No coachs found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default searchCoaches;
