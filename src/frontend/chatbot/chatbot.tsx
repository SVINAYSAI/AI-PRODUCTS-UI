import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
const Chatbot1: React.FC = () => {
  
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        {/* <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        /> */}
      </div>
    </div>
  );
};

export default Chatbot1;
