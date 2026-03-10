import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/index";
import * as s from "./styledNav";

const sections = ["tjenester", "prosjekter", "om-oss", "kontakt"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
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
            <s.NavItem
              href="#tjenester"
              $active={activeSection === "tjenester"}
            >
              Tjenester
            </s.NavItem>

            <s.NavItem
              href="#prosjekter"
              $active={activeSection === "prosjekter"}
            >
              Prosjekter
            </s.NavItem>

            <s.NavItem href="#om-oss" $active={activeSection === "om-oss"}>
              Om oss
            </s.NavItem>

            <s.NavItem href="#kontakt" $active={activeSection === "kontakt"}>
              Kontakt
            </s.NavItem>
          </s.NavMenu>
        </Navbar.Collapse>
      </Container>
    </s.NavbarWrapper>
  );
}
