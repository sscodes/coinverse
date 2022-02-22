class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  query() {
    const query = this.createChatBotMessage(
      "Here are some articles that may help:",
      {
        widget: "articles",
      }
    );
    this.updateChatbotState(query);
  }

  welcome() {
    const welcome = this.createChatBotMessage("Welcome! 😊");
    this.updateChatbotState(welcome);
  }

  default() {
    const default1 = this.createChatBotMessage(
      "I couldn't find any relevant articles."
    );
    this.updateChatbotState(default1);
  }

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
