import React from "react";
import videoSrc from "../../components/assets/imgs/navbar_background.mp4"; // Import the video source file
import "../../components/assets/css/navbar_background.css"

export default function Navbar() {
  return (
    <div className="video1 container mx-auto px-4">
      <div className="relative">
        <video className="absolute w-full h-full object-cover" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
