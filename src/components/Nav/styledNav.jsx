import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavbarWrapper = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(7, 12, 24, 0.72)" : "rgba(7, 12, 24, 0.18)"};

  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"};

  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? "18px" : "10px")});
  -webkit-backdrop-filter: blur(
    ${({ $scrolled }) => ($scrolled ? "18px" : "10px")}
  );

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 10px 30px rgba(0, 0, 0, 0.16)" : "none"};

  /* HAMBURGER */

  .navbar-toggler {
    border: none;
    background: transparent;
    padding: 0;
    width: 32px;
    height: 24px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: transform 0.22s ease;
  }

  .navbar-toggler:hover {
    transform: scale(1.05);
  }

  .navbar-toggler:focus {
    outline: none;
    box-shadow: none;
  }

  /* Vis hamburger kun på mobil */

  @media (max-width: 991.98px) {
    .navbar-toggler {
      display: inline-flex;
    }

    .navbar-collapse {
      margin-top: 1rem;
    }
  }

  @media (min-width: 992px) {
    .navbar-toggler {
      display: none;
    }
  }
`;

export const NavMenu = styled(Nav)`
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 991.98px) {
    align-items: stretch;
    gap: 0.45rem;
  }
`;

export const NavItem = styled.a`
  position: relative;
  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(240,245,255,0.85)")};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.97rem;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  transition: all 0.22s ease;
  background: ${({ $active }) =>
    $active ? "rgba(255,255,255,0.08)" : "transparent"};
  border: 1px solid
    ${({ $active }) => ($active ? "rgba(125,143,255,0.22)" : "transparent")};
  box-shadow: ${({ $active }) =>
    $active ? "0 0 18px rgba(125,143,255,0.14)" : "none"};

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

export const ToggleLines = styled.div`
  position: relative;
  width: 22px;
  height: 16px;

  span {
    position: absolute;
    left: 0;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: #ffffff;
    transition:
      transform 0.28s ease,
      top 0.28s ease,
      opacity 0.2s ease,
      width 0.28s ease;
    transform-origin: center;
  }

  span:nth-child(1) {
    top: ${({ $expanded }) => ($expanded ? "6px" : "0px")};
    transform: ${({ $expanded }) =>
      $expanded ? "rotate(45deg)" : "rotate(0)"};
  }

  span:nth-child(2) {
    top: 6px;
    opacity: ${({ $expanded }) => ($expanded ? 0 : 1)};
    transform: ${({ $expanded }) => ($expanded ? "scaleX(0.4)" : "scaleX(1)")};
  }

  span:nth-child(3) {
    top: ${({ $expanded }) => ($expanded ? "6px" : "12px")};
    transform: ${({ $expanded }) =>
      $expanded ? "rotate(-45deg)" : "rotate(0)"};
  }
`;
