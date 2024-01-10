// Import necessary dependencies
import React, { useState } from 'react';

// Define constant variables
const image_url = "https://media.publit.io/file/logo-RT.jpeg";
const API_KEY = 123456; 
const caption = "This is me, I am the god"; 
const ig_user_id = "17841464186775711"; 

// Define the React component
const InstagramPostComponent: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const createinstagramPost = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/instagram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_url: image_url,
            api: API_KEY,
            ig_user_id: ig_user_id,
            caption: caption,
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
      <h1>Create instagram Post</h1>
      <button onClick={createinstagramPost}>Create Post</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default InstagramPostComponent;
