import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./SecondPart.css";

const SecondPart = () => {
  const [copy, setCopy] = useState("Copy to clipboard");
  // eslint-disable-next-line no-unused-vars
  const [copyVal, setCopyVal] = useState("llj54afd354fd54fssdh65464ad");

  const changeCopy = (e) => {
    navigator.clipboard.writeText(copyVal);
    setCopy("Copied!");
    setTimeout(() => {
      setCopy("Copy to clipboard");
    }, 4000);
  };

  return (
    <Container className="py-5" style={{ color: "blue" }}>
      <Row>
        <Col md={6}>
          <h3>Total Supply</h3>
          <h4>69,000,000,000,000</h4>
        </Col>
        <Col md={6}>
          <h3>The Circulating Supply</h3>
          <h4>37,507,764,933,034,490</h4>
        </Col>
        <Col xs={12}>
          <div class="color-height"></div>
          <h4>CoinVerse (CVS) Contract Address</h4>
          <p>Note: Make sure to copy the exact addres</p>
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
                  <Button className="p-4" onClick={changeCopy}>
                    {copy}
                  </Button>
                ) : (
                  <Button className="p-4">{copy}</Button>
                )}
              </Col>
              <Col xs={12} sm={3}></Col>
            </Row>
          </Container>
          <div class="color-height"></div>
          <Button className="p-4">Join our telegram channel</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondPart;
