import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/index";
import * as s from "./styledNav";

const sections = ["tjenester", "prosjekter", "om-oss", "kontakt"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [expanded, setExpanded] = useState(false);

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

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setExpanded(false);
  };

  return (
    <s.NavbarWrapper expand="lg" $scrolled={scrolled} expanded={expanded}>
      <Container fluid>
        <Logo />

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Åpne meny"
          onClick={handleToggle}
        >
          <s.ToggleLines $expanded={expanded}>
            <span />
            <span />
            <span />
          </s.ToggleLines>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <s.NavMenu>
            <s.NavItem
              as={HashLink}
              smooth
              to="/#tjenester"
              $active={activeSection === "tjenester"}
              onClick={handleCloseMenu}
            >
              Tjenester
            </s.NavItem>

            <s.NavItem
              as={HashLink}
              smooth
              to="/#prosjekter"
              $active={activeSection === "prosjekter"}
              onClick={handleCloseMenu}
            >
              Prosjekter
            </s.NavItem>

            <s.NavItem
              as={HashLink}
              smooth
              to="/#om-oss"
              $active={activeSection === "om-oss"}
              onClick={handleCloseMenu}
            >
              Om oss
            </s.NavItem>

            <s.NavItem
              as={HashLink}
              smooth
              to="/#kontakt"
              $active={activeSection === "kontakt"}
              onClick={handleCloseMenu}
            >
              Kontakt
            </s.NavItem>
          </s.NavMenu>
        </Navbar.Collapse>
      </Container>
    </s.NavbarWrapper>
  );
}
