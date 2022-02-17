import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TelegramModal from "./Components/TelegramModal";
import "./SecondPart.css";

const SecondPart = () => {
  const [copy, setCopy] = useState("Copy to clipboard");
  // eslint-disable-next-line no-unused-vars
  const [copyVal, setCopyVal] = useState("llj54afd354fd54fssdh65464ad");
  const [modalShow, setModalShow] = useState(false);

  const changeCopy = (e) => {
    navigator.clipboard.writeText(copyVal);
    setCopy("Copied!");
    setTimeout(() => {
      setCopy("Copy to clipboard");
    }, 4000);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h3 style={{ color: "blue" }}>Total Supply</h3>
          <h4 style={{ color: "white" }}>69,000,000,000,000</h4>
        </Col>
        <Col md={6}>
          <h3 style={{ color: "blue" }}>The Circulating Supply</h3>
          <h4 style={{ color: "white" }}>37,507,764,933,034,490</h4>
        </Col>
        <Col xs={12}>
          <div class="color-height"></div>
          <h4 style={{ color: "white" }}>CoinVerse (CVS) Contract Address</h4>
          <p style={{ color: "blue" }}>Note: Make sure to copy the exact addres</p>
          <Container>
            <Row>
              <Col xs={12} sm={3}></Col>
              <Col xs={12} sm={3}>
                <Form.Control
                  classsName="text-center"
                  type="text"
                  placeholder={copyVal}
                  readOnly
                />
              </Col>
              <Col xs={12} sm={3}>
                {copy === "Copy to clipboard" ? (
                  <Button
                    className="p-4 copy-btn"
                    variant="primary"
                    onClick={changeCopy}
                  >
                    {copy}
                  </Button>
                ) : (
                  <Button className="p-4 copy-btn" variant="success">
                    {copy}
                  </Button>
                )}
              </Col>
              <Col xs={12} sm={3}></Col>
            </Row>
          </Container>
          <div class="color-height"></div>
          <Button className="p-4" onClick={() => setModalShow(true)}>Join our telegram channel</Button>
          <TelegramModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SecondPart;
