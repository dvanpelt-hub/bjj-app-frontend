import React from "react";
// import HomepageBanner from "../assets/videos/b&w_homepage.mp4"
// import HomepageBanner from "../assets/film1_homepage.mp4"
import HomepageBanner from "../assets/videos/japanese_VHS1_homepage.mp4"
import "./VideoContainer.css"

const VideoContainer = () => {
  return (
    <div className="relative w-full h-180 overflow-hidden">
      {/* video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-80 left-1/2 w-95 -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source src={HomepageBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* overlay */}
      <div className="absolute inset-0 flex mt-60 flex-col items-center justify-center bg-opacity-50 text-[#000000] text-center px-4 z-10 font-home-video-bold">
        <h1 className="text-5xl md:text-6xl">
          Jiu Jitsu App
        </h1>
        <p className="text-lg md:text-2xl mt-4 italic">
          This is our tagline
        </p>
      </div>
    </div>
  );
};

export default VideoContainer;
