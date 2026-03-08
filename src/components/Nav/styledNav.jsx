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
`;

export const NavMenu = styled(Nav)`
  align-items: center;
  gap: 0.6rem;
`;

export const NavItem = styled.a`
  color: rgba(240, 245, 255, 0.86);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.97rem;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  transition: all 0.22s ease;
  border: 1px solid transparent;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14);
  }
`;
