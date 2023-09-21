// CoBotAvatar.tsx
import React from "react";

import { ReactComponent as BotAvatar } from "./icons/bot.svg";

// Define the props type for CoBotAvatar
type CoBotAvatarProps = {
  imageUrl: string;
  altText: string;
  // Add other props as needed
};

const CoBotAvatar: React.FC<CoBotAvatarProps> = ({ imageUrl, altText }) => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <img src={imageUrl} alt={altText} className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default CoBotAvatar;
