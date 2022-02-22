import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "./Components/ActionProvider";
import MessageParser from "./Components/MessageParser";
import config from "./Components/config";
import "react-chatbot-kit/build/main.css";

const ChatbotComp = () => {
  return (
    <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
    />
  );
};

export default ChatbotComp;
