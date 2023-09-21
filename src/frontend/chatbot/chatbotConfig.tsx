import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";
import LocalStatistics from "./widgets/LocalStatistics";
import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";

// Define the props type for CoBotAvatar
type CoBotAvatarProps = {
  imageUrl: string;
  altText: string;
  // Add other props as needed
};

// Define types for the widget and message
type WidgetType = {
  widgetName: string;
  widgetFunc: React.FC;
  mapStateToProps?: string[];
};

type MessageType = {
  loading: boolean;
  widget?: string;
  // Add other message properties as needed
};

const config = {
  lang: "no",
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
    createChatBotMessage("Hi, I'm here to provide you with the latest COVID-19 data to keep you safe!", {
      loading: false,
      widget: "overview",
      // Add other options as needed
    }),
    createChatBotMessage("Here's a quick overview of what I can help you with. You can also type in.", {
      delay: 400,
      widget: "overview",
      // Add other options as needed
    }),
  ],
  state: {},
  customComponents: {
    botAvatar: (props: CoBotAvatarProps) => <CoBotAvatar {...props} />, // Use the props type for CoBotAvatar
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props) => <GlobalStatistics />,
    },
    {
      widgetName: "localStatistics",
      widgetFunc: (props) => <LocalStatistics />,
    },
    {
      widgetName: "emergencyContact",
      widgetFunc: (props) => <Contact />,
    },
    {
      widgetName: "medicineDelivery",
      widgetFunc: (props) => <MedicineDelivery />,
    },
  ] as WidgetType[], // Ensure widgets are of type WidgetType[]
};

export default config;
