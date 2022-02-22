/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
        <Col xs={12} className="py-5">
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
        <Col sm={2}></Col>
        <Col xs={12} sm={4}>
          <Card className="text-center">
            <Card.Body className="sixth-card-body">
              <Row>
                <Col xs={12}>
                  <h3 style={{ color: "white" }}>White Paper - 2021</h3>
                </Col>
                <Col xs={12} className="mt-5">
                  <Button size="lg">Download</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card className="text-center">
            <Card.Body className="sixth-card-body">
              <Row>
                <Col xs={12}>
                  <h3 style={{ color: "white" }}>Coinverse Brand Audit</h3>
                </Col>
                <Col xs={12} className="mt-5">
                  <Button size="lg">Download</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Container>
  );
};

export default FinalPart;
