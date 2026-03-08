import styled, { keyframes } from "styled-components";

export const Footer = styled.footer`
  position: relative;
  padding: 5rem 1.5rem 3rem;

  background:
    radial-gradient(
      circle at 20% 0%,
      rgba(79, 124, 255, 0.08),
      transparent 35%
    ),
    radial-gradient(
      circle at 80% 0%,
      rgba(167, 139, 255, 0.08),
      transparent 35%
    ),
    linear-gradient(180deg, #070d18 0%, #060b15 100%);
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  z-index: 2;

  a,
  img,
  svg {
    display: block;
  }

  img,
  svg {
    width: 130px;
    height: auto;
  }
`;

export const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
  max-width: 320px;
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Title = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.6rem;
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.9rem;
  transition:
    color 0.22s ease,
    text-shadow 0.22s ease,
    transform 0.22s ease;
  width: fit-content;

  &:hover {
    color: white;
    text-shadow: 0 0 18px rgba(125, 143, 255, 0.28);
    transform: translateX(2px);
  }
`;

export const Text = styled.span`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
`;

export const Top = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Bottom = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 3rem;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.85rem;
`;

export const BottomLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    font-size: 0.85rem;
    transition:
      color 0.22s ease,
      text-shadow 0.22s ease;

    &:hover {
      color: white;
      text-shadow: 0 0 16px rgba(125, 143, 255, 0.22);
    }
  }
`;

const shimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const TopLine = styled.div`
  position: relative;
  z-index: 2;
  height: 1px;
  width: 100%;
  margin-bottom: 2.5rem;
  background: linear-gradient(
    90deg,
    rgba(79, 124, 255, 0) 0%,
    rgba(79, 124, 255, 0.65) 20%,
    rgba(167, 139, 255, 0.8) 50%,
    rgba(79, 124, 255, 0.65) 80%,
    rgba(79, 124, 255, 0) 100%
  );
  background-size: 200% 200%;
  animation: ${shimmer} 8s ease infinite;
  opacity: 0.75;
`;
