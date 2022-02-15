import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../../Assets/logo.jpeg";
import certikLogo from "../../Assets/certik-logo.svg";
import { AiOutlineEye } from "react-icons/ai";

const Hero = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="mt-5" style={{ color: "blue", textAlign: "left" }}>
          <h1>COINVERSE</h1>
          <h2>An financial Token working on Web 3.0!</h2>
          <p>
            Coinverse (CVS) is an innovative deflationary Token aiming to
            revolutionise defi,building it's own blockchain , we will introduce
            a multichain swap across etherum, binance,cardano, and polygon.
          </p>
          <div className="d-grid gap-2">
            <Button className="p-2">Buy On Uniswap</Button>
          </div>
          <div
            style={{ backgroundColor: "black" }}
            className="rounded-3 mt-4 p-4"
          >
            <Row>
              <Col md={6} className="mt-2">
                <img src={certikLogo} alt="" />
              </Col>
              <Col md={6} style={{ textAlign: "right" }}>
                <Button className="p-3">
                  <AiOutlineEye /> Buy On Uniswap
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <img src={logo} alt="" width={500} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
