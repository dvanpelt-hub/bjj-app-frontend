import React from "react";
// import HomepageBanner from "../assets/b&w_homepage.mp4"
// import HomepageBanner from "../assets/film1_homepage.mp4"
import HomepageBanner from "../assets/japanese_VHS1_homepage.mp4"

const VideoContainer = () => {
  return (
    <div className="relative w-full h-180 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-80 left-1/2 w-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source src={HomepageBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex mt-20 flex-col items-center justify-center bg-opacity-50 text-white text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to BJJ Review
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          This is our tagline
        </p>
      </div>
    </div>
  );
};

export default VideoContainer;
