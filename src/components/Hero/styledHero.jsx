import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0% { transform: scale(1); opacity: 0.45; }
  50% { transform: scale(1.08); opacity: 0.7; }
  100% { transform: scale(1); opacity: 0.45; }
`;

const drift = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  25% { transform: translate3d(12px, -10px, 0); }
  50% { transform: translate3d(-8px, 12px, 0); }
  75% { transform: translate3d(10px, 8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const shine = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 2rem 10rem;
  background:
    radial-gradient(
      circle at top left,
      rgba(79, 124, 255, 0.18),
      transparent 32%
    ),
    radial-gradient(
      circle at 85% 15%,
      rgba(111, 76, 255, 0.16),
      transparent 28%
    ),
    radial-gradient(
      circle at 70% 75%,
      rgba(0, 225, 255, 0.12),
      transparent 28%
    ),
    linear-gradient(180deg, #060b16 0%, #0b1020 45%, #090e1a 100%);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 220px;
    background: linear-gradient(
      180deg,
      rgba(9, 14, 26, 0) 0%,
      rgba(8, 14, 25, 0.78) 55%,
      #08101d 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: 7.5rem 1.25rem 7rem;
  }

  @media (max-width: 600px) {
    padding: 7rem 1rem 6rem;
  }
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at center, black 35%, transparent 100%);
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  border-radius: 999px;
  filter: blur(80px);
  animation: ${pulseGlow} 7s ease-in-out infinite;

  &.glow-1 {
    width: 24rem;
    height: 24rem;
    top: 8%;
    left: -4%;
    background: rgba(79, 124, 255, 0.28);
  }

  &.glow-2 {
    width: 30rem;
    height: 30rem;
    top: 18%;
    right: -8%;
    background: rgba(111, 76, 255, 0.22);
    animation-delay: 1.2s;
  }

  &.glow-3 {
    width: 22rem;
    height: 22rem;
    bottom: -2rem;
    left: 35%;
    background: rgba(0, 225, 255, 0.16);
    animation-delay: 2.4s;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: min(1400px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 700px) {
    gap: 2rem;
  }
`;
export const LeftContent = styled.div`
  max-width: 760px;
`;

export const Badge = styled.div`
  width: fit-content;
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  color: #dbe7ff;
  font-size: 0.92rem;
  letter-spacing: 0.01em;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
  flex-wrap: wrap;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7aa2ff 0%, #8f7cff 100%);
    box-shadow: 0 0 18px rgba(122, 162, 255, 0.8);
    flex-shrink: 0;
  }

  @media (max-width: 700px) {
    font-size: 0.82rem;
    padding: 0.6rem 0.85rem;
    gap: 0.55rem;
  }
`;

export const Title = styled.h1`
  margin: 0 0 1.4rem;
  color: #f5f8ff;
  font-size: clamp(2.5rem, 6vw, 5.9rem);
  line-height: 0.97;
  letter-spacing: -0.04em;
  font-weight: 800;

  @media (max-width: 700px) {
    font-size: clamp(2.2rem, 10vw, 3.4rem);
    line-height: 1.02;
    margin-bottom: 1rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(
    90deg,
    #f7fbff 0%,
    #9cc0ff 22%,
    #7d8fff 48%,
    #a78bff 72%,
    #d7eeff 100%
  );
  background-size: 220% 220%;
  animation: ${shine} 7s ease infinite;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Description = styled.p`
  max-width: 680px;
  margin: 0 0 2rem;
  color: rgba(230, 237, 247, 0.78);
  font-size: clamp(1rem, 1.5vw, 1.18rem);
  line-height: 1.75;

  @media (max-width: 700px) {
    font-size: 1rem;
    line-height: 1.65;
    margin-bottom: 1.5rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 520px) {
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0.95rem 1.4rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.98rem;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  color: #f5f8ff;
  background: linear-gradient(135deg, #4f7cff 0%, #7a5cff 100%);
  box-shadow:
    0 14px 30px rgba(79, 124, 255, 0.26),
    0 0 30px rgba(111, 76, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.14);

  &:hover {
    box-shadow:
      0 18px 38px rgba(79, 124, 255, 0.34),
      0 0 36px rgba(111, 76, 255, 0.24);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  color: #eaf1ff;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 1rem 1rem 1.1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(3, 8, 18, 0.3);

  strong {
    display: block;
    color: #f5f8ff;
    font-size: 0.98rem;
    margin-bottom: 0.35rem;
  }

  span {
    color: rgba(230, 237, 247, 0.7);
    font-size: 0.92rem;
    line-height: 1.5;
  }
`;

export const RightContent = styled.div`
  position: relative;
  min-height: 640px;

  @media (max-width: 1100px) {
    min-height: 520px;
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const FloatingCard = styled.div`
  position: absolute;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.11) 0%,
    rgba(255, 255, 255, 0.055) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  &.main-card {
    top: 3rem;
    right: 0;
    width: min(100%, 560px);
    padding: 1rem;
    animation: ${float} 6.5s ease-in-out infinite;
  }

  @media (max-width: 1100px) {
    &.main-card {
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      width: min(100%, 560px);
    }
  }

  @media (max-width: 700px) {
    &.main-card {
      top: 0;
      left: 0;
      right: 0;
      transform: none;
      width: 100%;
      padding: 0.8rem;
      border-radius: 22px;
    }
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  p {
    margin: 0;
    color: rgba(235, 242, 255, 0.75);
    font-size: 0.9rem;
  }
`;

export const CardDots = styled.div`
  display: flex;
  gap: 0.45rem;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.45);

    &:nth-child(1) {
      background: rgba(255, 114, 114, 0.9);
    }

    &:nth-child(2) {
      background: rgba(255, 210, 91, 0.9);
    }

    &:nth-child(3) {
      background: rgba(61, 225, 130, 0.9);
    }
  }
`;

export const MockupBody = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 1rem;
  min-height: 340px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    min-height: auto;
  }
`;

export const MockupSidebar = styled.div`
  padding: 0.8rem;
  border-radius: 20px;
  background: rgba(6, 12, 26, 0.52);
  border: 1px solid rgba(255, 255, 255, 0.06);

  div {
    height: 2.2rem;
    border-radius: 14px;
    margin-bottom: 0.8rem;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.14)
    );
  }
`;

export const MockupMain = styled.div`
  padding: 1rem;
  border-radius: 22px;
  background: rgba(6, 12, 26, 0.52);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const MockupLine = styled.div`
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.14),
    rgba(255, 255, 255, 0.06)
  );
  margin-bottom: 0.9rem;

  &.large {
    width: 72%;
    height: 18px;
  }

  &.medium {
    width: 48%;
    height: 14px;
  }
`;

export const MockupChart = styled.div`
  position: relative;
  height: 180px;
  margin: 1.4rem 0 1rem;
  border-radius: 20px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(79, 124, 255, 0.08), transparent 80%),
    rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);

  &::before {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 68%;
    background: linear-gradient(
      180deg,
      rgba(79, 124, 255, 0) 0%,
      rgba(79, 124, 255, 0.16) 100%
    );
    clip-path: polygon(
      0% 82%,
      16% 66%,
      32% 72%,
      48% 45%,
      64% 52%,
      80% 26%,
      100% 8%,
      100% 100%,
      0% 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 18%;
    bottom: 18%;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 700px) {
    height: 120px;
    margin: 1rem 0 0.8rem;
  }
`;

export const SmallCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;

  div {
    height: 72px;
    border-radius: 18px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.04)
    );
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const MiniGlassCard = styled.div`
  position: absolute;
  width: 220px;
  padding: 1rem 1rem 1.1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.065);
  border: 1px solid rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
  animation: ${float} 7.5s ease-in-out infinite;

  h4 {
    margin: 0 0 0.4rem;
    color: #f5f8ff;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: rgba(230, 237, 247, 0.7);
    font-size: 0.92rem;
    line-height: 1.45;
  }

  &.mini-1 {
    top: 0.5rem;
    left: 0;
    animation-delay: 1.3s;
  }

  &.mini-2 {
    bottom: 2.8rem;
    left: 1.2rem;
    animation-delay: 2.4s;
  }

  @media (max-width: 1100px) {
    &.mini-1 {
      left: 2%;
    }

    &.mini-2 {
      left: 4%;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const TechOrb = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  min-height: 92px;
  padding: 1rem;
  border-radius: 999px;
  color: #eef4ff;
  font-weight: 700;
  letter-spacing: 0.01em;
  background: radial-gradient(
    circle at top,
    rgba(255, 255, 255, 0.14),
    rgba(255, 255, 255, 0.05)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.26),
    0 0 26px rgba(79, 124, 255, 0.1);
  animation: ${drift} 9s ease-in-out infinite;

  &.orb-1 {
    top: 11rem;
    right: 3.5rem;
  }

  &.orb-2 {
    bottom: 7rem;
    right: -0.5rem;
    animation-delay: 1.5s;
  }

  &.orb-3 {
    top: 22rem;
    left: 2rem;
    animation-delay: 2.8s;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
