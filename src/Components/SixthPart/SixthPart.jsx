import { Card, Col, Container, Row } from "react-bootstrap";
import "./SixthPart.css";

const SixthPart = () => {
  return (
    <Container className="py-5" id="section 5">
      <Row className="py-5">
        <Col xs={12} className="pb-5">
          <h1 style={{ color: "white" }}>How It Works</h1>
          <p style={{ color: "blue" }}>
            A contract with self-feeding LP and marketing allowance with
            in-built reflections directly to its holders.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center">
            <Card.Body className="sixth-card-body">
              <Row>
                <Col xs={12}>
                  <h3 style={{ color: "white" }}>Safe & Secure</h3>
                </Col>
                <Col xs={12}>
                  <p style={{ color: "blue" }}>
                    5% LP tax goes directly to the liquidity pool to forever
                    strengthen the projects price floor
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center">
            <Card.Body className="sixth-card-body">
              <Row>
                <Col xs={12}>
                  <h3 style={{ color: "white" }}>Passive Income</h3>
                </Col>
                <Col xs={12}>
                  <p style={{ color: "blue" }}>
                    3% reflections tax goes directly to each and every holder
                    proportionately from each and every transaction.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center">
            <Card.Body className="sixth-card-body">
              <Row>
                <Col xs={12}>
                  <h3 style={{ color: "white" }}>Marketing Wallet</h3>
                </Col>
                <Col xs={12}>
                  <p style={{ color: "blue" }}>
                    5% of each and every transaction goes to further market the
                    project
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SixthPart;
