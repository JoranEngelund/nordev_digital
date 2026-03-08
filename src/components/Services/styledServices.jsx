import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.08); opacity: 0.7; }
  100% { transform: scale(1); opacity: 0.4; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const shine = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -90px;
  padding: 10rem 1.5rem 7rem;
  z-index: 3;
  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(79, 124, 255, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 10%,
      rgba(111, 76, 255, 0.08),
      transparent 30%
    ),
    linear-gradient(180deg, #08101d 0%, #09111f 100%);
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.14;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
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
    top: 10%;
    left: -5%;
    background: rgba(79, 124, 255, 0.18);
  }

  &.glow-2 {
    width: 26rem;
    height: 26rem;
    bottom: 0;
    right: -6%;
    background: rgba(111, 76, 255, 0.16);
    animation-delay: 1.4s;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: min(1280px, 100%);
  margin: 0 auto;
`;

export const SectionHeading = styled.div`
  position: relative;
  z-index: 2;
  max-width: 780px;
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.4rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1.5rem;
  border-radius: 28px;
  background: ${({ $featured }) =>
    $featured
      ? "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.07) 100%)"
      : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.05) 100%)"};
  border: 1px solid
    ${({ $featured }) =>
      $featured ? "rgba(140, 162, 255, 0.35)" : "rgba(255,255,255,0.10)"};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.28),
    ${({ $featured }) =>
      $featured ? "0 0 30px rgba(79, 124, 255, 0.18)" : "none"};
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease;
  animation: ${float} 7s ease-in-out infinite;

  &:hover {
    transform: translateY(-6px);
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.34),
      ${({ $featured }) =>
        $featured
          ? "0 0 36px rgba(79, 124, 255, 0.26)"
          : "0 0 24px rgba(255,255,255,0.06)"};
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #4f7cff 0%, #7a5cff 100%);
  color: #f8fbff;
  font-size: 0.78rem;
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(79, 124, 255, 0.26);
`;

export const CardTop = styled.div`
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.6rem;
  color: #f5f8ff;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const CardPrice = styled.div`
  color: #cfe0ff;
  font-size: 1.85rem;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const CardDescription = styled.p`
  margin: 0 0 1.2rem;
  color: rgba(230, 237, 247, 0.72);
  line-height: 1.75;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.4rem;

  li {
    position: relative;
    padding-left: 1.35rem;
    margin-bottom: 0.8rem;
    color: #e9f0fb;
    line-height: 1.55;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7aa2ff 0%, #8f7cff 100%);
    box-shadow: 0 0 14px rgba(122, 162, 255, 0.55);
  }
`;

export const CardButton = styled.a`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.9rem 1.2rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  color: #f5f8ff;
  background: ${({ $featured }) =>
    $featured
      ? "linear-gradient(135deg, #4f7cff 0%, #7a5cff 100%)"
      : "rgba(255,255,255,0.06)"};
  border: 1px solid
    ${({ $featured }) =>
      $featured ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.12)"};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $featured }) =>
      $featured
        ? "0 16px 34px rgba(79, 124, 255, 0.28)"
        : "0 12px 24px rgba(0,0,0,0.18)"};
  }
`;

export const ExtrasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 1.2rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ExtraCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 1.3rem 1.4rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ExtraTitle = styled.h4`
  margin: 0 0 0.35rem;
  color: #f5f8ff;
  font-size: 1.1rem;
`;

export const ExtraText = styled.p`
  margin: 0;
  color: rgba(230, 237, 247, 0.7);
  line-height: 1.6;
`;

export const ExtraPrice = styled.div`
  color: #dbe6ff;
  font-size: 1.35rem;
  font-weight: 800;
  white-space: nowrap;
`;

export const Note = styled.p`
  margin: 1.4rem 0 0;
  text-align: center;
  color: rgba(230, 237, 247, 0.58);
  font-size: 0.95rem;
  line-height: 1.6;
`;
