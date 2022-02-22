import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chrono } from "react-chrono";
import "./SeventhPart.css";

const SeventhPart = () => {
  const items = [
    {
      title: "Phase 1",
      cardDetailedText: [
        "√ Setup Social Media",
        "√ Develop Website",
        "√ Giveaways",
        "√ Marketing - In Process",
      ],
    },
    {
      title: "Phase 2",
      cardDetailedText: [
        "√ AMA’s",
        "√ Pancake swap Launch",
        "√ FEGEX Launch",
        "√ Social Media Ads",
        "√ Influencers",
      ],
    },
    {
      title: "Phase 3",
      cardDetailedText: [
        "▪Listed on CoinMarketCap",
        "▪Listed on Coingecko",
        "▪Exchange Listing",
        "▪Hotbit",
        "▪BitMart",
        "▪ProBit",
        "▪Gate.io",
        "▪Crypto.com",
        "▪Binance",
      ],
    },
    {
      title: "Phase 4",
      cardDetailedText: [
        "• Launch COINVERSE - Q1 2022",
        "• Launch COINVERSE 2FA Wallet - Q2 2022",
        "• Launch COINVERSE  Blockchain - Q3 2022",
      ],
    },
    {
      title: "Phase 5",
      cardDetailedText: ["• Launch Coinverse - Q2 2023"],
    },
  ];

  return (
    <Container className="py-5" id="section 6">
      <Row>
        <Col xs={12} className="py-5">
          <h1 style={{ color: "white" }}>Roadmap</h1>
        </Col>
        <Col xs={12} className="pb-5">
          <Chrono
            items={items}
            mode="HORIZONTAL"
            itemWidth={410}
            lineWidth={4}
            useReadMore={false}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SeventhPart;
