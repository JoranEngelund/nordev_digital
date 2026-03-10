import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 9rem 1.25rem 6rem;
  background:
    radial-gradient(
      circle at 20% 10%,
      rgba(79, 124, 255, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 0%,
      rgba(167, 139, 255, 0.08),
      transparent 28%
    ),
    linear-gradient(180deg, #08101d 0%, #09111f 100%);
`;

export const Container = styled.div`
  width: min(920px, 100%);
  margin: 0 auto;
  padding: 2rem;
  border-radius: 32px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.28),
    0 0 30px rgba(79, 124, 255, 0.08);

  @media (max-width: 700px) {
    padding: 1.25rem;
    border-radius: 24px;
  }
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.6rem 0.95rem;
  border-radius: 999px;
  color: #dce7ff;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

export const Title = styled.h1`
  margin: 0 0 0.6rem;
  color: #f4f8ff;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.04;
  letter-spacing: -0.03em;
`;

export const Updated = styled.p`
  margin: 0 0 1.6rem;
  color: rgba(230, 237, 247, 0.56);
`;

export const Intro = styled.p`
  margin: 0 0 2rem;
  color: rgba(230, 237, 247, 0.8);
  font-size: 1.05rem;
  line-height: 1.8;
`;

export const Block = styled.section`
  margin-bottom: 1.8rem;

  h2 {
    margin: 0 0 0.7rem;
    color: #f5f8ff;
    font-size: 1.2rem;
  }

  p,
  li {
    color: rgba(230, 237, 247, 0.78);
    line-height: 1.75;
  }

  ul {
    margin: 0.6rem 0 0;
    padding-left: 1.25rem;
  }

  a {
    color: #dbe6ff;
  }
`;

export const Note = styled.p`
  margin: 2rem 0 0;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(230, 237, 247, 0.62);
  line-height: 1.7;
`;
