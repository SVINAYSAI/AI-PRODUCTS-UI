// video_edit.tsx
import { useState, useEffect} from "react";
import React from 'react';

type VideoEditProps = {
    videoPath?: string;
    progress?: number;
  };

  

const VideoEdit: React.FC<VideoEditProps> = ({ videoPath}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
          const interval = setInterval(async () => {
            const response = await fetch('http://195.35.22.190:5000/progress/story');
            const data = await response.json();
            if (data.progress) {
              setProgress(data.progress);
            }
            if (data.progress === 100) {
              clearInterval(interval);
              // Fetch the video URL or update the videoPath here
            }
          }, 1000); // Poll every 1 second
      
          return () => clearInterval(interval); // Clear interval when the component unmounts
        }
      }, [progress]);
    return (
        <div>
            <h1>Video Edit Page</h1>
             {/* Progress bar */}
             {typeof progress !== 'undefined' && progress !== 100 && <p>Processing: {progress.toFixed(0)}%</p>} {/* Checking if progress is not undefined */}
            <video width="320" height="240" controls>
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoEdit;