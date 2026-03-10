import styled from "styled-components";

export const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 9999;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(10, 14, 25, 0.35);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 100%;
  width: 0%;

  background: linear-gradient(
    90deg,
    #4f7cff 0%,
    #7a5cff 40%,
    #a78bff 70%,
    #4f7cff 100%
  );

  box-shadow:
    0 0 12px rgba(125, 143, 255, 0.5),
    0 0 24px rgba(125, 143, 255, 0.25);

  transition: width 0.12s linear;
  border-radius: 0 4px 4px 0;
  overflow: visible;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(167, 139, 255, 0.85) 25%,
      rgba(79, 124, 255, 0.45) 55%,
      rgba(79, 124, 255, 0) 75%
    );
    filter: blur(1px);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
    width: 36px;
    height: 10px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(167, 139, 255, 0.18) 45%,
      rgba(255, 255, 255, 0.45) 100%
    );
    filter: blur(6px);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: opacity 0.2s ease;
    pointer-events: none;
  }
`;
