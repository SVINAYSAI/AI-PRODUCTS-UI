import react from "react";
import React, { useState, ChangeEvent, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

export const Logic =  () => { 
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [filePreviews, setFilePreviews] = useState<(string | ArrayBuffer | null)[]>([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [editorContent, setEditorContent] = useState<string>("");

    const handleFileChangepriview = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
          const newFiles = Array.from(files);
          setSelectedFiles([...selectedFiles, ...newFiles]);
          const newPreviews = newFiles.map((file) => {
            const reader = new FileReader();
            if (file.type.startsWith("image/")) {
              reader.readAsDataURL(file);
            } else if (file.type.startsWith("video/")) {
              reader.readAsArrayBuffer(file);
            } else {
              setFilePreviews((prevPreviews) => [...prevPreviews, null]);
              return "";
            }
            reader.onload = () => {
              setFilePreviews((prevPreviews) => [...prevPreviews, reader.result]);
            };
            return "";
          });
        }
      };
    
      const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
        setEditorContent((prevContent) => prevContent + emojiObject.emoji);
      };
    
      const handleEmojiButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.stopPropagation();
        setShowEmojiPicker(!showEmojiPicker);
      };

    return(
        handleFileChangepriview,
        handleEmojiClick,
    );
};