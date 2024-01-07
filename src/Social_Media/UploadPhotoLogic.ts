// UploadPhotoLogic.tsx
import React, { useRef, useState, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

export const useUploadPhotoLogic = () => {
  const [comment, setComment] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  return {
    comment,
    selectedImage,
    showEmojiPicker,
    emojiContainerRef,
    handleCommentChange,
    handleImageChange,
    handleEmojiClick,
    handleEmojiContainerClick,
    handleSubmit,
    setShowEmojiPicker, // Include setShowEmojiPicker in the returned object
  };
};
