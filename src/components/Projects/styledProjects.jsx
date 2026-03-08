import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0% { transform: scale(1); opacity: 0.38; }
  50% { transform: scale(1.08); opacity: 0.62; }
  100% { transform: scale(1); opacity: 0.38; }
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
  margin-top: -40px;
  padding: 7rem 1.5rem 7rem;
  z-index: 3;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(79, 124, 255, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 15%,
      rgba(140, 110, 255, 0.09),
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
    width: 22rem;
    height: 22rem;
    top: 4%;
    left: -4%;
    background: rgba(79, 124, 255, 0.16);
  }

  &.glow-2 {
    width: 26rem;
    height: 26rem;
    bottom: 0;
    right: -6%;
    background: rgba(131, 91, 255, 0.14);
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 30px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.09) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid
    ${({ $accent }) =>
      $accent === "violet"
        ? "rgba(167, 139, 255, 0.22)"
        : "rgba(125, 143, 255, 0.22)"};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.28),
    ${({ $accent }) =>
      $accent === "violet"
        ? "0 0 30px rgba(167, 139, 255, 0.10)"
        : "0 0 30px rgba(79, 124, 255, 0.10)"};
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease;
  animation: ${float} 7s ease-in-out infinite;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ $accent }) =>
      $accent === "violet"
        ? "rgba(167, 139, 255, 0.35)"
        : "rgba(125, 143, 255, 0.35)"};
    box-shadow:
      0 34px 84px rgba(0, 0, 0, 0.34),
      ${({ $accent }) =>
        $accent === "violet"
          ? "0 0 40px rgba(167, 139, 255, 0.18), 0 0 90px rgba(167, 139, 255, 0.10)"
          : "0 0 40px rgba(79, 124, 255, 0.18), 0 0 90px rgba(79, 124, 255, 0.10)"};
  }
`;

export const ProjectPreview = styled.div`
  padding: 1rem;
  background: ${({ $accent }) =>
    $accent === "violet"
      ? "radial-gradient(circle at 20% 20%, rgba(167, 139, 255, 0.18), transparent 30%), linear-gradient(180deg, rgba(14, 17, 34, 0.8), rgba(8, 12, 24, 0.95))"
      : "radial-gradient(circle at 20% 20%, rgba(79, 124, 255, 0.18), transparent 30%), linear-gradient(180deg, rgba(14, 17, 34, 0.8), rgba(8, 12, 24, 0.95))"};
`;

export const BrowserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.85rem 1rem;
  border-radius: 18px 18px 0 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: none;
`;

export const BrowserDots = styled.div`
  display: flex;
  gap: 0.45rem;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;

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

export const AddressBar = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(230, 237, 247, 0.66);
  font-size: 0.88rem;
`;

export const MockScreen = styled.div`
  padding: 1rem;
  border-radius: 0 0 22px 22px;
  background: rgba(6, 12, 26, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const MockHero = styled.div`
  height: 180px;
  border-radius: 20px;
  margin-bottom: 1rem;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.03)
    ),
    radial-gradient(
      circle at 20% 20%,
      rgba(79, 124, 255, 0.26),
      transparent 26%
    ),
    radial-gradient(
      circle at 80% 35%,
      rgba(167, 139, 255, 0.2),
      transparent 22%
    );
  border: 1px solid rgba(255, 255, 255, 0.07);
`;

export const MockRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 22px 22px;
  height: 320px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transform: scale(1.02);
  transition: transform 0.35s ease;
  F ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const MockBlock = styled.div`
  height: 74px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.09),
    rgba(255, 255, 255, 0.04)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);

  &.wide {
    grid-column: span 2;
  }

  @media (max-width: 540px) {
    &.wide {
      grid-column: span 1;
    }
  }
`;

export const ProjectBody = styled.div`
  padding: 1.5rem;
`;

export const ProjectCategory = styled.div`
  margin-bottom: 0.65rem;
  color: #a9b8d8;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 0.8rem;
  color: #f5f8ff;
  font-size: 1.55rem;
  font-weight: 800;
`;

export const ProjectDescription = styled.p`
  margin: 0 0 1.15rem;
  color: rgba(230, 237, 247, 0.74);
  line-height: 1.75;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 1.2rem;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  color: #dbe6ff;
  font-size: 0.85rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 0.85rem;
`;

export const LiveButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.9rem 1.2rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  color: #f5f8ff;
  background: linear-gradient(135deg, #4f7cff 0%, #7a5cff 100%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 16px 34px rgba(79, 124, 255, 0.22);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(79, 124, 255, 0.28);
  }
`;
