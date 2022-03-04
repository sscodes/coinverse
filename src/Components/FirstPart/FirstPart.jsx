import { Col, Container, Row } from "react-bootstrap";

const FirstPart = () => {
  return (
    <Container className="py-5" id="section 7">
      <Row>
        <Col xs={12} className="pb-5">
          <h2 style={{ color: "#32b697" }}>Mission Statement</h2>
          <p style={{ color: "white" }}>
            To provide less gas fees as compare to etherum (eth) , binance (bnb)
            , polygon and all and provide security 2 Fa wallet for the crypto
            community and vetted projects
          </p>
        </Col>
        <Col lg={6} className="pt-3">
          <h5 style={{ color: "#32b697" }}>BUY $COINVERSE NOW</h5>
          <div
            style={{
              backgroundColor: "black",
              height: "30vw",
              width: "30vw",
              margin: "auto",
            }}
            className="mt-4"
          ></div>
        </Col>
        <Col lg={6} className="pt-3">
          <h5 style={{ color: "#32b697" }}>
            AN Financial Token working on Revolution to provide an next level
            security in wallet
          </h5>
          <div
            style={{
              backgroundColor: "black",
              height: "30vw",
              width: "30vw",
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
