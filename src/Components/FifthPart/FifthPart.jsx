import "bootstrap/dist/css/bootstrap.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import people from "../../Assets/people.jpeg";
import "./FifthPart.css";

const FifthPart = () => {
  return (
    <Container className="py-5" id="section 4">
      <Row>
        <Col xs={12} className="pb-5">
          <h1 style={{ color: "white" }}>Meet Our Team</h1>
          <h6 style={{ color: "blue" }}>
            A strong and clear team makes transparency and credibility the
            biggest investment.
          </h6>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Card
            style={{
              width: "18rem",
              padding: "15px",
            }}
          >
            <Card.Img variant="top" src={people} className="mb-3" />
            <Card.Body className="fifth-card">
              <Card.Title>
                <h3 style={{ color: "white" }}>Richie Ekong</h3>
              </Card.Title>
              <Card.Text>
                <h6 style={{ color: "blue" }}> CEO/Developer</h6>
              </Card.Text>
              <a href="https://twitter.com/Free_Patriot76" className="mx-2 p-1">
                <AiOutlineTwitter />
              </a>
              <a href="https://twitter.com/Free_Patriot76" className="mx-2 p-1">
                <FaTelegramPlane />
              </a>
              <a href="https://twitter.com/Free_Patriot76" className="mx-2 p-1">
                <FaLinkedin />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Card
            style={{
              width: "18rem",
              padding: "15px",
            }}
          >
            <Card.Img variant="top" src={people} className="mb-3" />
            <Card.Body className="fifth-card">
              <Card.Title>
                <h3 style={{ color: "white" }}>Richie Ekong</h3>
              </Card.Title>
              <Card.Text>
                <h6 style={{ color: "blue" }}> CEO/Developer</h6>
              </Card.Text>
              <a href="https://twitter.com/Free_Patriot76" className="mx-2 p-1">
                <AiOutlineTwitter />
              </a>
              <a href="https://twitter.com/Free_Patriot76" className="mx-2 p-1">
                <FaTelegramPlane />
              </a>
              <a href="https://twitter.com/Free_Patriot76" className="mx-2 p-1">
                <FaLinkedin />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthPart;
