// Import necessary dependencies
import React, { useState } from 'react';

// Define constant variables
//const video_path = "https://media.publit.io/file/logo-RT.jpeg";
//const image_path = 123456; 
const tweet_text = "This is me, I am the god"; 
const user_api_key = 123456; 

// Define the React component
const TwitterPostComponent: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const createtwitterPost = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/twitter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //video_path: video_path,
            tweet: tweet_text,
            api: user_api_key,
            //image_path: image_path,
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
      <h1>Create Twtter Post</h1>
      <button onClick={createtwitterPost}>Create Post</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default TwitterPostComponent;
