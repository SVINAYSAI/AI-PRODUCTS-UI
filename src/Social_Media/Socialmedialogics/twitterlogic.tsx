// Import necessary dependencies
import React, { useState } from 'react';
import { useUploadPhotoLogic } from '../UploadPhotoLogic';
// Define constant variables
//const video_path = "https://media.publit.io/file/logo-RT.jpeg";
//const image_path = 123456; 

// Define the React component
const TwitterPostComponent: React.FC = () => {
  const { responseMessage, createTwitterPost } = useUploadPhotoLogic();

  const tweet_text = "This is me, I am the god";
  const user_api_key = 123456;

  const handleCreateTwitterPost = async () => {
    try {
      await createTwitterPost( user_api_key);
    } catch (error) {
      console.error("Error creating Twitter post:", error);
    }
  };


  return (
    <div>
      <h1>Create Twtter Post</h1>
      <button onClick={handleCreateTwitterPost}>Create Post</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default TwitterPostComponent;
