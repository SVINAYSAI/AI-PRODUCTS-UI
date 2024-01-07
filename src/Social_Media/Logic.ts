// Logic.ts
import { useState, ChangeEvent } from "react";
import { EmojiClickData } from "emoji-picker-react";

interface LogicProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setFilePreviews: React.Dispatch<React.SetStateAction<(string | ArrayBuffer | null)[]>>;
  setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setEditorContent: React.Dispatch<React.SetStateAction<string>>;
}

export const useLogic = ({
  selectedFiles,
  setSelectedFiles,
  setFilePreviews,
  setShowEmojiPicker,
  setEditorContent,
}: LogicProps) => {
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
    setShowEmojiPicker((prevShowEmojiPicker) => !prevShowEmojiPicker);
  };

  return {
    handleFileChangepriview,
    handleEmojiClick,
    handleEmojiButtonClick,
  };
};
