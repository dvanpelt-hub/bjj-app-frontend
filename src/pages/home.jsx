import { useSelector } from "react-redux";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import FeaturedCoaches from "../components/FeaturedCoaches";

const home = () => {
  const { access_token } = useSelector((state) => state.auth);
  return (
    access_token ?    <>
      <Welcome />
      <Specialties />
      <FeaturedCoaches />
    </> :
    <>
      <Welcome />
    </>
  );
};

export default home;
