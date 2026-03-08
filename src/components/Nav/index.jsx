import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/index";
// eslint-disable-next-line no-unused-vars
import * as s from "./styledNav";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <s.NavbarWrapper expand="lg" $scrolled={scrolled}>
      <Container fluid>
        <Logo />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <s.NavMenu>
            <s.NavItem href="#tjenester">Tjenester</s.NavItem>
            <s.NavItem href="#prosjekter">Prosjekter</s.NavItem>
            <s.NavItem href="#om-oss">Om oss</s.NavItem>
            <s.NavItem href="#kontakt">Kontakt</s.NavItem>
          </s.NavMenu>
        </Navbar.Collapse>
      </Container>
    </s.NavbarWrapper>
  );
}
