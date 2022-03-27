import { Col, Container, Row } from "react-bootstrap";
import pic1 from "../../Assets/bc.png";

const ThirdPart = () => {
  return (
    <Container className="py-5" style={{ color: "#32b697" }} id="section 2">
      <Row>
        <Col xs={12} className="pb-5">
          <h1 style={{ color: "white" }} className="pb-2">
            Why invest in COINVERSE?
          </h1>
          <h6>
            * We are developing 6 major project 1. Multichain DEX 2.Own
            Blockchain 3. Inbuilt 2 Fa 4. Coinverse wallet 5.P2E Virtual
            Ecosystem 6.NFT Marketplace Coinverse focuses on developing a user
            friendly multichain swap in Defi Ecosystem
          </h6>
        </Col>
        <Col lg={6} style={{ textAlign: "left" }}>
          <h5 style={{ color: "white" }}>
            COINVERSE (CVS) focuses on developing a user-friendly multi-chain
            swap in the DeFi ecosystem.
          </h5>
          <Row>
            <Col xs={12}>
              <Row className="mt-5">
                <Col xs={2} md={1}>
                  <img src={pic1} alt="" width={40} />
                </Col>
                <Col xs={10} md={11}>
                  <p>
                    <b style={{ color: "white" }}>Coinverse swap:</b> is
                    conceptualized to address the lack of user-friendly tools
                    across EVM-compatible networks in DeFi. DojoSwap will be
                    built on a decentralized AMM system leveraging liquidity
                    pools powered by users to enable seamless crypto trades
                    across multiple chains.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row className="mt-2">
                <Col xs={2} md={1}>
                  <img src={pic1} alt="" width={40} />
                </Col>
                <Col xs={10} md={11}>
                  <p>
                    {" "}
                    <b style={{ color: "white" }}>Coinverse blockchain:</b>{" "}
                    Coinverse proof-of-stake blockchain, hard forked from the
                    Ethereum blockchain. This blockchain will offer cheaper gas
                    fees than Ethereum and faster transactions than the Ethereum
                    block. It consists of Kusari mainnet and testnet, and the
                    Kusari Explorer.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row className="mt-2">
                <Col xs={2} md={1}>
                  <img src={pic1} alt="" width={40} />
                </Col>
                <Col xs={10} md={11}>
                  <p>
                    <b style={{ color: "white" }}>Coinverse:</b> Enter the
                    Coinverse virtual reality Metaverse. When the user arrives
                    they will find themselves on the DojoDisc. From there, the
                    user will be able to explore all things #CoinverseStyle and
                    find directories of establishments on other discs in the
                    Dojoverse.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row className="mt-2">
                <Col xs={2} md={1}>
                  <img src={pic1} alt="" width={40} />
                </Col>
                <Col xs={10} md={11}>
                  <p>
                    <b style={{ color: "white" }}>Coinverse Wallet:</b> Two
                    Factor Authentication (2FA) Wallet will require a code
                    entered from their authenticator app on the phone before any
                    transactions can occur out of the user's wallet.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdPart;
