import { createChatBotMessage } from "react-chatbot-kit";
import Articles from "./Articles";

const config = {
  botName: "Coinverse",
  initialMessages: [createChatBotMessage("Hi! Welcome to Coinverse.")],
  widgets: [
    {
      widgetName: "articles",
      widgetFunc: (props) => <Articles {...props} />,
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "blue",
    },
    chatButton: {
      backgroundColor: "blue",
    },
  },
};

export default config;
