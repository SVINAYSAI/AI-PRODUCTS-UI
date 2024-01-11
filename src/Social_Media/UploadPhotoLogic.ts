// UploadPhotoLogic.tsx
import React, { useRef, useState, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface ApiResponse {
  message: string;
}

export const useUploadPhotoLogic = () => {
  const [comment, setComment] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const emojiContainerRef = useRef<HTMLDivElement | null>(null);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setComment((prevComment) => prevComment + emojiObject.emoji);
  };

  const handleEmojiContainerClick = () => {
    setShowEmojiPicker(true);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const emojiContainer = emojiContainerRef.current;

    if (emojiContainer && !emojiContainer.contains(e.target as Node)) {
      setShowEmojiPicker(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Comment:", comment);
    console.log("Selected Image:", selectedImage);
    setComment("");
    setSelectedImage(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const createFacebookPost = async ( apiKey: number) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/facebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: comment,
          api: apiKey,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: ApiResponse = await response.json();
      setResponseMessage(responseData.message);

      // Log the response to the console
      console.log(responseData);
    } catch (error: any) {
      setResponseMessage(`Error: ${error.message}`);
      console.error(error);
    }
  };

  const createInstagramPost = async (imageUrl: string, apiKey: number, igUserId: string, caption: string) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/instagram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_url: imageUrl,
          api: apiKey,
          ig_user_id: igUserId,
          caption: caption,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData: ApiResponse = await response.json();
      setResponseMessage(responseData.message);
      // Log the response to the console
      console.log(responseData);
    } catch (error: any) {
      setResponseMessage(`Error: ${error.message}`);
      console.error(error);
    }
  };

  const createTwitterPost = async ( apiKey: number) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/twitter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: comment,
          api: apiKey,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: ApiResponse = await response.json();
      setResponseMessage(responseData.message);

      // Log the response to the console
      console.log(responseData);
    } catch (error: any) {
      setResponseMessage(`Error: ${error.message}`);
      console.error(error);
    }
  };

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Check if the selected file is a video
      if (file.type.startsWith("video/")) {
        try {
          const videoURL = URL.createObjectURL(file);
          setSelectedVideo(videoURL); // Update state with the video URL
        } catch (error) {
          console.error("Error creating video URL:", error);
          setSelectedVideo(null);
        }
      } else {
        // Handle other file types (e.g., images)
        setSelectedVideo(null);
        // ... (your existing logic for handling images)
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = selectedVideo || "";
    }
  }, [selectedVideo]);

  return {
    comment,
    selectedImage,
    selectedVideo,
    videoRef,
    showEmojiPicker,
    emojiContainerRef,
    handleCommentChange,
    handleImageChange,
    handleVideoChange,
    handleEmojiClick,
    handleEmojiContainerClick,
    handleSubmit,
    setShowEmojiPicker, // Include setShowEmojiPicker in the returned object
    responseMessage,
    createFacebookPost,
    createInstagramPost,
    createTwitterPost,
  };
};