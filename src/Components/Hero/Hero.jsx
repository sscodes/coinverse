import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import certikLogo from "../../Assets/certik-logo.svg";
import logo from "../../Assets/logo.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <Container className="py-5" id="section 1">
      <Row>
        <Col lg={6} className="py-5" style={{ textAlign: "left" }}>
          <h1 style={{ color: "#32b697", fontSize: "4rem" }}>COINVERSE</h1>
          <h2 style={{ color: "white" }}>
            An financial Token working on Web 3.0!
          </h2>
          <p style={{ color: "#32b697" }}>
            Coinverse (CVS) is an innovative deflationary Token aiming to
            revolutionise defi,building it's own blockchain , we will introduce
            a multichain swap across etherum, binance,cardano, and polygon.
          </p>
          <a
            href="https://pancakeswap.finance/add/0x00cBd38FC4c2532c428Da9AAe68e289948561F80/BNB"
            className="hero-btn"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-grid gap-2">
              <Button className="p-2">Buy On Pankcakeswap</Button>
            </div>
          </a>
          <div
            style={{ backgroundColor: "black" }}
            className="rounded-3 mt-4 p-4"
          >
            <Row>
              <Col md={6} className="mt-2">
                <img src={certikLogo} alt="" />
              </Col>
              <Col md={6} style={{ textAlign: "right" }}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href=""
                  className="hero-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="p-3">
                    <AiOutlineEye /> Audit Report
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}>
          <img src={logo} alt="" width={500} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
