import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="https://bscscan.io/token/0xab167e816e4d76089119900e941befdfa37d6b32">
              Bscscan
            </Nav.Link>
            <Nav.Link href="https://www.coingecko.com/en/coins/shibnobi">
              CoinGecko
            </Nav.Link>
            <Nav.Link href="https://coinmarketcap.com/currencies/shibnobi/">
              CoinMarketCap
            </Nav.Link>
            <Nav.Link href="https://shibnobi.zendesk.com/hc/en-us">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
