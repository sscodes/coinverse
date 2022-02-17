import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../Assets/logo.jpeg";
import "./Header.css";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState("🇺🇸 English");

  //   const changeLang = (lang) => {
  //     setLang(lang);
  //   };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="border-bottom border-white"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt=""
              height={70}
              style={{ marginTop: "-10px", marginRight: "4px" }}
            />
            COINVERSE
          </Navbar.Brand>

          <Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link
                href="#home"
                style={{
                  color: "blue",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                style={{
                  color: "blue",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#guide"
                style={{
                  color: "blue",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Guide
              </Nav.Link>
              <Nav.Link
                href="#team"
                style={{
                  color: "blue",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Team
              </Nav.Link>
              <Nav.Link
                href="#howitworks"
                style={{
                  color: "blue",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                How it works
              </Nav.Link>
              <Nav.Link
                href="#roadmap"
                style={{
                  color: "blue",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Roadmap
              </Nav.Link>
              <NavDropdown
                title={lang}
                id="navbarScrollingDropdown"
                style={{
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
              >
                <NavDropdown.Item>🇦🇪 Arabic</NavDropdown.Item>
                <NavDropdown.Item>🇨🇳 Chinese</NavDropdown.Item>
                <NavDropdown.Item>🇳🇱 Dutch</NavDropdown.Item>
                <NavDropdown.Item>🇺🇸 English</NavDropdown.Item>
                <NavDropdown.Item>🇫🇷 French</NavDropdown.Item>
                <NavDropdown.Item>🇩🇪 German</NavDropdown.Item>
                <NavDropdown.Item>🇮🇳 Hindi</NavDropdown.Item>
                <NavDropdown.Item>🇮🇩 Indonesian</NavDropdown.Item>
                <NavDropdown.Item>🇮🇹 Italian</NavDropdown.Item>
                <NavDropdown.Item>🇯🇵 Japanese</NavDropdown.Item>
                <NavDropdown.Item>🇰🇷 Korean</NavDropdown.Item>
                <NavDropdown.Item>🇻🇦 Latin</NavDropdown.Item>
                <NavDropdown.Item>🇳🇵 Nepali</NavDropdown.Item>
                <NavDropdown.Item>🇮🇷 Persian</NavDropdown.Item>
                <NavDropdown.Item>🇵🇹 Portuguese</NavDropdown.Item>
                <NavDropdown.Item>🇷🇺 Russian</NavDropdown.Item>
                <NavDropdown.Item>🇸🇰 Slovak</NavDropdown.Item>
                <NavDropdown.Item>🇪🇸 Spanish</NavDropdown.Item>
                <NavDropdown.Item>🇹🇷 Turkish</NavDropdown.Item>
                <NavDropdown.Item>🇺🇦 Ukranian</NavDropdown.Item>
                <NavDropdown.Item>🇻🇳 Vietnamese</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="https://shibnobi.com/#earn"
                style={{ fontSize: "18px" }}
                target="_blank"
                rel="noreferrer"
              >
                <Button>Buy Now</Button>
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
