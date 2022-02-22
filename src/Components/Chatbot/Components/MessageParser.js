class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage === "hello" ||
      lowerCaseMessage === "hi" ||
      lowerCaseMessage.includes(" hello ") ||
      lowerCaseMessage.includes(" hi ") ||
      lowerCaseMessage.includes(" hi") ||
      lowerCaseMessage.includes(" hello") ||
      lowerCaseMessage.includes("hello ") ||
      lowerCaseMessage.includes("hello ")
    ) {
      this.actionProvider.greet();
    } else if (
      lowerCaseMessage.includes("help") ||
      lowerCaseMessage.includes("what") ||
      lowerCaseMessage.includes("which") ||
      lowerCaseMessage.includes("why") ||
      lowerCaseMessage.includes("how") ||
      lowerCaseMessage.includes("coin") ||
      lowerCaseMessage.includes("crypto") ||
      lowerCaseMessage.includes("report") ||
      lowerCaseMessage.includes("stats") ||
      lowerCaseMessage.includes("news") ||
      lowerCaseMessage.includes("coinverse") ||
      lowerCaseMessage.includes("meme coin")||
      lowerCaseMessage.includes("articles")||
      lowerCaseMessage.includes("find")
    ) {
      this.actionProvider.query();
    } else if (
      lowerCaseMessage.includes("thanks") ||
      lowerCaseMessage.includes("thank you") 
    ) {
      this.actionProvider.welcome();
    }else {
      this.actionProvider.default();
    }
  }
}

export default MessageParser;
