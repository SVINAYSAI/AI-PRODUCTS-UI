import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";

// Define a custom CoBotAvatar component
const CoBotAvatar: React.FC = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      {/* Add your avatar JSX here */}
    </div>
  );
};

// Define your chatbot configuration
const config = {
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a",
    },
    chatButton: {
      backgroundColor: "#0f5faf",
    },
  },
  initialMessages: [
    {
      id: 1, // Add a unique ID
      type: "system",
      content: "You are now chatting with CoBot.",
    },
    {
      id: 2, // Add a unique ID
      type: "text",
      content: "Hi, I'm here to provide you with the latest COVID-19 data to keep you safe!",
    },
  ],
  customComponents: {
    botAvatar: CoBotAvatar,
  },
  widgets: [],
};

export default function Chatbot1(): JSX.Element {
  const [showBot, toggleBot] = useState<boolean>(false);

  return (
    <div className="App">
      <h1>COVID-19-Chatbot</h1>
      <h2>Start chatting with the COVID-19-Chatbot!</h2>
      <div className="app-chatbot-container">
        {showBot && (
          <Chatbot
            config={config}
          />
        )}
      </div>
      <button
        className="app-chatbot-button"
        onClick={() => toggleBot((prev) => !prev)}
      >
        <div>Bot</div>
        <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
          {/* Add SVG path */}
        </svg>
      </button>
    </div>
  );
}
