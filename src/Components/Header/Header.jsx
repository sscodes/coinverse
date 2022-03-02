/* eslint-disable react-hooks/rules-of-hooks */
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";
import logo from "../../Assets/logo.jpeg";
import "./Header.css";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = localStorage.lang
    ? useState(localStorage.lang)
    : useState("🇺🇸 English");

  const changeLang = (e) => {
    setLang(e.target.text);
    localStorage.setItem("lang", e.target.text);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

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
          <Navbar.Brand onClick={scrollToTop}>
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
              <Link
                activeClass="active"
                to="section 1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                style={{
                  color: "#32b697",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="section 2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                style={{
                  color: "#32b697",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="section 3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                style={{
                  color: "#32b697",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Guide
              </Link>
              <Link
                activeClass="active"
                to="section 4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                style={{
                  color: "#32b697",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Team
              </Link>
              <Link
                activeClass="active"
                to="section 5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                style={{
                  color: "#32b697",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                How it works
              </Link>
              <Link
                activeClass="active"
                to="section 6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                style={{
                  color: "#32b697",
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
                className="navLinks"
              >
                Roadmap
              </Link>
              <NavDropdown
                title={lang}
                id="navbarScrollingDropdown"
                style={{
                  // marginTop: "10px",
                  marginRight: "4px",
                  fontSize: "18px",
                }}
              >
                <NavDropdown.Item onClick={changeLang}>
                  🇦🇪 Arabic
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇨🇳 Chinese
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇳🇱 Dutch
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇺🇸 English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇫🇷 French
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇩🇪 German
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇮🇳 Hindi
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇮🇩 Indonesian
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇮🇹 Italian
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇯🇵 Japanese
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇰🇷 Korean
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇻🇦 Latin
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇳🇵 Nepali
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇮🇷 Persian
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇵🇹 Portuguese
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇷🇺 Russian
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇸🇰 Slovak
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇪🇸 Spanish
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇹🇷 Turkish
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇺🇦 Ukranian
                </NavDropdown.Item>
                <NavDropdown.Item onClick={changeLang}>
                  🇻🇳 Vietnamese
                </NavDropdown.Item>
              </NavDropdown>
              <Link
                style={{ fontSize: "18px" }}
                activeClass="active"
                to="section 7"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                <Button>Buy Now</Button>
              </Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
