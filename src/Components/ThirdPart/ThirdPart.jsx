import { Col, Container, Row } from "react-bootstrap";

const ThirdPart = () => {
  return (
    <Container className="py-5" style={{ color: "blue" }}>
      <Row>
        <Col xs={12} className="pb-5">
          <h4>Why invest in COINVERSE?</h4>
          <p>
            * We are developing 6 major project 1. Multichain DEX 2.Own
            Blockchain 3. Inbuilt 2 Fa 4. Coinverse wallet 5.P2E Virtual
            Ecosystem 6.NFT Marketplace Coinverse focuses on developing a user
            friendly multichain swap in Defi Ecosystem
          </p>
        </Col>
        <Col xs={6} style={{ textAlign: "left" }}>
          <h5>
            COINVERSE (CVS) focuses on developing a user-friendly multi-chain
            swap in the DeFi ecosystem.
          </h5>
          <Row>
              <Col xs={12}>
                  <Row>
                      <Col xs={2}></Col>
                      <Col xs={10}></Col>
                  </Row>
              </Col>
              <Col xs={12}>
                  <Row>
                      <Col xs={2}></Col>
                      <Col xs={10}></Col>
                  </Row>
              </Col>
              <Col xs={12}>
                  <Row>
                      <Col xs={2}></Col>
                      <Col xs={10}></Col>
                  </Row>
              </Col>
              <Col xs={12}>
                  <Row>
                      <Col xs={2}></Col>
                      <Col xs={10}></Col>
                  </Row>
              </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdPart;
