/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import "./FinalPart.css";

const FinalPart = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12}>
          <h1 style={{ color: "white" }}>Social Share</h1>
        </Col>
        <Col xs={12} className="mt-5">
          <a href="https://twitter.com/Coinverse3" className="final-icons">
            <AiOutlineTwitter />
          </a>
          <a
            href="https://t.me/Coinverseofficialcommunity"
            className="final-icons"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/coin.verseofficial/"
            className="final-icons"
          >
            <AiOutlineInstagram />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalPart;
