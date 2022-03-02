import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="https://www.bscscan.com/address/0x00cBd38FC4c2532c428Da9AAe68e289948561F80">
              Bscscan
            </Nav.Link>
            <Nav.Link href="">CoinGecko</Nav.Link>
            <Nav.Link href="">CoinMarketCap</Nav.Link>
            <Nav.Link href="">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
