import React from "react";

// Define the type for the videoPath prop
interface LoadingProps {
  videoPath: string;
}

const Loading: React.FC<LoadingProps> = ({ videoPath }) => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading video from: {videoPath}</p>
    </div>
  );
};

export default Loading;

