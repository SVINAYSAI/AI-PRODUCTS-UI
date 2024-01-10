// Import necessary dependencies
import React, { useState } from 'react';

// Define constant variables
const POST_MESSAGE = 'Hello, Facebook!';
const API_KEY = 123456; // Replace with your actual API key
//const IMAGE_PATH = '/path/to/your/image.jpg'; // Replace with your actual image path
//const VIDEO_PATH = '/path/to/your/video.mp4'; // Replace with your actual video path

// Define the React component
const FacebookPostComponent: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const createFacebookPost = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/facebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postmessage: POST_MESSAGE,
          api: API_KEY,
          //imagepath: IMAGE_PATH,
          //videopath: VIDEO_PATH,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setResponseMessage(responseData.message);

      // Log the response to the console
      console.log(responseData);
    } catch (error: any) {
      // Explicitly specify the type of error as 'any'
      setResponseMessage(`Error: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Facebook Post</h1>
      <button onClick={createFacebookPost}>Create Post</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FacebookPostComponent;
