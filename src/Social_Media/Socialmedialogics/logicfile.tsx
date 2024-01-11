// Import necessary dependencies
import React, { useState } from 'react';
import { useUploadPhotoLogic } from "../UploadPhotoLogic"


const FacebookPostComponent: React.FC = () => {
  
  const { createFacebookPost, responseMessage } = useUploadPhotoLogic();

  const customMessage = "Custom message";
  const apiKey = 789;

  const handleCreateFacebookPost = () => {
    createFacebookPost( apiKey);
  };

  return (
    <div>
      <h1>Create Facebook Post</h1>
      <button onClick={handleCreateFacebookPost}>Create Post</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FacebookPostComponent;
