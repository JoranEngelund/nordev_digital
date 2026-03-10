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
`;

export const ThemeToggle = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  cursor: pointer;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
  }
`;
