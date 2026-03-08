import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0% { transform: scale(1); opacity: 0.38; }
  50% { transform: scale(1.08); opacity: 0.62; }
  100% { transform: scale(1); opacity: 0.38; }
`;

const shine = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -30px;
  padding: 7rem 1.5rem 7rem;
  z-index: 3;
  background:
    radial-gradient(
      circle at 15% 15%,
      rgba(79, 124, 255, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 20%,
      rgba(167, 139, 255, 0.08),
      transparent 28%
    ),
    linear-gradient(180deg, #08101d 0%, #09111f 100%);
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.12;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at center, black 35%, transparent 100%);
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  border-radius: 999px;
  filter: blur(85px);
  animation: ${pulseGlow} 7s ease-in-out infinite;

  &.glow-1 {
    width: 24rem;
    height: 24rem;
    top: 4%;
    left: -4%;
    background: rgba(79, 124, 255, 0.14);
  }

  &.glow-2 {
    width: 24rem;
    height: 24rem;
    bottom: 0;
    right: -6%;
    background: rgba(167, 139, 255, 0.12);
    animation-delay: 1.3s;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: min(1280px, 100%);
  margin: 0 auto;
`;

export const SectionHeading = styled.div`
  max-width: 820px;
  margin: 0 auto 3rem;
  text-align: center;
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  color: #dce7ff;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const Title = styled.h2`
  margin: 0 0 1rem;
  color: #f4f8ff;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  font-weight: 800;
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
  margin: 0;
  color: rgba(230, 237, 247, 0.75);
  font-size: 1.05rem;
  line-height: 1.8;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ReasonCard = styled.article`
  position: relative;
  padding: 1.6rem;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);

  animation-delay: ${({ $delay }) => $delay * 0.4}s;
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(125, 143, 255, 0.24);
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.3),
      0 0 34px rgba(79, 124, 255, 0.1);
  }
`;

export const CardNumber = styled.div`
  margin-bottom: 1rem;
  color: rgba(154, 174, 235, 0.45);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.75rem;
  color: #f5f8ff;
  font-size: 1.35rem;
  font-weight: 800;
`;

export const CardText = styled.p`
  margin: 0;
  color: rgba(230, 237, 247, 0.74);
  line-height: 1.75;
  font-size: 1rem;
`;
