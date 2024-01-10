// Import necessary dependencies
import React, { useState } from 'react';
import { useUploadPhotoLogic } from '../UploadPhotoLogic';

// Define constant variables
const image_url = "https://media.publit.io/file/logo-RT.jpeg";
const API_KEY = 123456; 
const caption = "This is me, I am the god"; 
const ig_user_id = "17841464186775711"; 

// Define the React component
const InstagramPostComponent: React.FC = () => {
  const {
    comment,
    selectedImage,
    showEmojiPicker,
    emojiContainerRef,
    handleCommentChange,
    handleImageChange,
    handleEmojiClick,
    handleEmojiContainerClick,
    handleSubmit,
    setShowEmojiPicker,
    responseMessage,
    createInstagramPost,
  } = useUploadPhotoLogic();

  const API_KEY = 123456;
  const ig_user_id = "17841464186775711";
  const caption = "This is me, I am the god";
  const image_url = "https://media.publit.io/file/logo-RT.jpeg";

  const handleCreateInstagramPost = async () => {
    try {
      // Use the constant image_url for the image URL
      await createInstagramPost(image_url, API_KEY, ig_user_id, caption);
    } catch (error) {
      console.error("Error creating Instagram post:", error);
    }
  };

  return (
    <div>
      <h1>Create instagram Post</h1>
      <button onClick={handleCreateInstagramPost}>Create Post</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default InstagramPostComponent;
