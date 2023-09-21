import React, { useState } from 'react';

import './tailwind.css'; // Import your CSS file for styling

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState<string>('');

  const predefinedMessages = [
    'Hello!',
    'How can I assist you?',
    'Please provide more details.',
  ];

  const addMessage = (message: string, isUser = false) => {
    setMessages([...messages, { text: message, isUser }]);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputSubmit = () => {
    if (input.trim() !== '') {
      addMessage(input, true); // Add user message
      // You can add logic here to handle responses from the chatbot.
      setInput('');
    }
  };

  return (
    <div>
      {/* Chatbot icon */}
      <div
        className={`fixed bottom-4 left-4 cursor-pointer ${isOpen ? 'hidden' : ''}`}
        onClick={toggleChatbot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 22h-2v-14h2v14zm18 0h-14v-14h14v14zm-4-8h-4v-4h4v4zm-6-10h-8v2h8v-2zm0 4h-8v2h8v-2zm0 4h-8v2h8v-2z" />
        </svg>
      </div>

      {/* Chat window */}
      <div className={`fixed bottom-4 right-4 bg-white p-4 shadow-lg chat-window ${isOpen ? 'open' : ''}`}>
        <div className="mb-4 chat-content">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isUser ? 'user-message' : 'assistant-message'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow border p-2 rounded-l-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg"
            onClick={handleInputSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
