import React from "react";
import "./Articles.css";

const Articles = (props) => {
  const options = [
    {
      text: "What is the difference between a coin and a token?",
      handler: "",
      id: 1,
    },
    {
      text: "COINVERSE FUD: Questions and Answers",
      handler: "",
      id: 2,
    },
    {
      text: "Welcome SafeMoonArmy FAQ",
      handler: "",
      id: 3,
    },
    {
      text: "What steps can I take to protect myself in the cryptocurrency world?",
      handler: "",
      id: 4,
    },
    {
      text: "What are the notable wallets of the contract?",
      handler: "",
      id: 5,
    },
    {
      text: "Is COINVERSE a meme token?",
      handler: "",
      id: 5,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <a
      className="articles-button"
      key={option.id}
      href={option.handler}
      target="_blank"
      rel="noreferrer"
    >
      {option.text}
    </a>
  ));

  return <div className="articles-container">{optionsMarkup}</div>;
};

export default Articles;
