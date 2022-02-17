import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FourthPart.css";

const FourthPart = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12}>
          <div class="head-title-box">
            <h2 class="title-bck-name">Guide how to buy Coinverse</h2>
            <span class="title-bck-name">COINVERSE</span>
          </div>
        </Col>
        <Col xs={12} style={{ color: "white" }} className="mt-4">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
              >
              <h4>Step 1</h4>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Create wallet
                </Typography>
                <Typography style={{ color: "blue" }}>
                  Create a MetaMask or Trust Wallet using either a desktop
                  computer or an iOS/Android mobile device. That will allow you
                  to buy, sell, send, and receive Coinverse (CVS)
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
                <h4>Step 2</h4>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Send BNB to your wallet
                </Typography>
                <Typography style={{ color: "blue" }}>
                  You can buy Binance (bnb) directly on MetaMask / Trust wallet
                  or transfer it to your Wallet from exchanges like Coinbase,
                  Binance, etc.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
                <h4>Step 3</h4>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot ></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Connect your wallet to Pancakeswap
                </Typography>
                <Typography style={{ color: "blue" }}>
                  Access your wallet to Pancakeswap by clicking ‘Connect to a
                  wallet’ and selecting Coinverse by the Contract Address
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
                <h4>Step 4</h4>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Swap Binance (bnb) for Coinverse
                </Typography>
                <Typography style={{ color: "blue" }}>
                  You can start swapping as soon as you have BNB available!
                  Press ‘Select a token’ and enter the token address Coinverse
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Col>
      </Row>
    </Container>
  );
};

export default FourthPart;
