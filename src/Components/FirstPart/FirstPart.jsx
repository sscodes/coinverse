import { Col, Container, Row } from "react-bootstrap";

const FirstPart = () => {
  return (
    <Container className="py-5" id="section 7">
      <Row>
        <Col xs={12} className="pb-5">
          <h2 style={{ color: "blue" }}>Mission Statement</h2>
          <p style={{ color: "white" }}>
            To provide less gas fees as compare to etherum (eth) , binance (bnb)
            , polygon and all and provide security 2 Fa wallet for the crypto
            community and vetted projects
          </p>
        </Col>
        <Col md={6}>
          <h5 style={{ color: "blue" }}>BUY $COINVERSE NOW</h5>
          <div
            style={{
              backgroundColor: "black",
              height: "500px",
              width: "500px",
              margin: "auto",
            }}
            className="mt-4"
          ></div>
        </Col>
        <Col md={6}>
          <h5 style={{ color: "blue" }}>
            AN Financial Token working on Revolution to provide an next level
            security in wallet
          </h5>
          <div
            style={{
              backgroundColor: "black",
              height: "500px",
              width: "500px",
              margin: "auto",
            }}
            className="mt-4"
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstPart;
