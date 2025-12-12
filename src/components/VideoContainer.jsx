import {Link} from "react-router"
import HomepageBanner from "../assets/videos/homepage_movie.mp4"
import SeeCoachesButton from "./SeeCoachesButton"
import "./VideoContainer.css"

const VideoContainer = () => {
  return (
    <div className="relative w-full h-180 overflow-hidden vertical-video">
      {/* video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source src={HomepageBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 text-[#ffffff] text-center px-4 z-10 font-home-video-bold">
        <p className="text-3xl font-bold m-3 italic">
          Get feedback on your performance
        </p>
        <Link to="/search-coaches"><SeeCoachesButton /></Link>
      </div>
    </div>
  );
};

export default VideoContainer;
