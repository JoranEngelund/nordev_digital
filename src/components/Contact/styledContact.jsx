import styled, { keyframes, css } from "styled-components";

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

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const statusIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.985);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -20px;
  padding: 7rem 1.5rem 8rem;
  z-index: 3;
  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(79, 124, 255, 0.1),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 15%,
      rgba(167, 139, 255, 0.09),
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
    top: 5%;
    left: -5%;
    background: rgba(79, 124, 255, 0.14);
  }

  &.glow-2 {
    width: 26rem;
    height: 26rem;
    bottom: 0;
    right: -5%;
    background: rgba(167, 139, 255, 0.12);
    animation-delay: 1.4s;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: min(1280px, 100%);
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  align-items: stretch;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const panelStyles = css`
  border-radius: 34px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.28),
    0 0 40px rgba(79, 124, 255, 0.08);
`;

export const LeftPanel = styled.div`
  ${panelStyles};
  padding: 2rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FormPanel = styled.div`
  ${panelStyles};
  padding: 2rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
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
  font-size: clamp(2.2rem, 4vw, 4.3rem);
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
  margin: 0 0 1.8rem;
  color: rgba(230, 237, 247, 0.76);
  font-size: 1.03rem;
  line-height: 1.8;
  max-width: 620px;
`;

export const InfoGrid = styled.div`
  display: grid;
  gap: 0.95rem;
`;

export const InfoCard = styled.div`
  padding: 1rem 1.1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);

  strong {
    display: block;
    margin-bottom: 0.35rem;
    color: #f5f8ff;
    font-size: 0.98rem;
  }

  span {
    color: rgba(230, 237, 247, 0.72);
    line-height: 1.65;
    font-size: 0.95rem;
  }
`;

export const FormHeader = styled.div`
  margin-bottom: 1.3rem;
`;

export const FormTitle = styled.h3`
  margin: 0 0 0.45rem;
  color: #f5f8ff;
  font-size: 1.45rem;
  font-weight: 800;
`;

export const FormText = styled.p`
  margin: 0;
  color: rgba(230, 237, 247, 0.7);
  line-height: 1.65;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const sharedFieldStyles = css`
  width: 100%;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #f5f8ff;
  font-size: 0.98rem;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.1);
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &:focus {
    outline: none;
    border-color: rgba(125, 143, 255, 0.55);
    box-shadow:
      0 0 0 4px rgba(79, 124, 255, 0.1),
      0 16px 34px rgba(0, 0, 0, 0.16);
    background: rgba(255, 255, 255, 0.06);
  }

  &::placeholder {
    color: transparent;
  }
`;

export const Input = styled.input`
  ${sharedFieldStyles}
  height: 62px;
  padding: 1.5rem 1rem 0.6rem;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectArrow = styled.div`
  position: absolute;
  right: 18px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-right: 2px solid rgba(255, 255, 255, 0.65);
  border-bottom: 2px solid rgba(255, 255, 255, 0.65);
  transform: translateY(-65%) rotate(45deg);
  pointer-events: none;
`;

export const Select = styled.select`
  ${sharedFieldStyles}
  height: 62px;
  padding: 0 3rem 0 1rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  color: #f5f8ff;

  option {
    background: #0b1020;
    color: #f5f8ff;
  }
`;

export const TextArea = styled.textarea`
  ${sharedFieldStyles}
  min-height: 160px;
  resize: vertical;
  padding: 1.7rem 1rem 0.8rem;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1.05rem;
  color: rgba(230, 237, 247, 0.56);
  font-size: 0.92rem;
  pointer-events: none;
  transition:
    top 0.18s ease,
    font-size 0.18s ease,
    color 0.18s ease;
`;

export const Field = styled.div`
  position: relative;

  ${Input}:focus + ${Label},
  ${Input}:not(:placeholder-shown) + ${Label},
  ${TextArea}:focus + ${Label},
  ${TextArea}:not(:placeholder-shown) + ${Label} {
    top: 0.55rem;
    font-size: 0.76rem;
    color: rgba(169, 190, 255, 0.82);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  min-height: 56px;
  padding: 0.95rem 1.35rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(135deg, #4f7cff 0%, #7a5cff 100%);
  color: #f8fbff;
  font-weight: 800;
  font-size: 0.97rem;
  cursor: pointer;
  box-shadow:
    0 16px 34px rgba(79, 124, 255, 0.24),
    0 0 26px rgba(111, 76, 255, 0.12);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    filter 0.22s ease,
    opacity 0.22s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow:
      0 20px 42px rgba(79, 124, 255, 0.3),
      0 0 32px rgba(111, 76, 255, 0.16);
    filter: brightness(1.03);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.82;
  }
`;

export const SecondaryLink = styled.a`
  color: rgba(230, 237, 247, 0.76);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #f5f8ff;
  }
`;

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.26);
  border-top-color: rgba(255, 255, 255, 0.95);
  animation: ${spin} 0.75s linear infinite;
`;

export const StatusMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  font-size: 0.95rem;
  line-height: 1.6;
  animation: ${statusIn} 0.28s ease both;
  border: 1px solid
    ${({ $type }) =>
      $type === "success"
        ? "rgba(83, 214, 136, 0.24)"
        : "rgba(255, 120, 120, 0.24)"};
  background: ${({ $type }) =>
    $type === "success"
      ? "rgba(83, 214, 136, 0.08)"
      : "rgba(255, 120, 120, 0.08)"};
  color: ${({ $type }) =>
    $type === "success"
      ? "rgba(220, 255, 232, 0.95)"
      : "rgba(255, 225, 225, 0.95)"};
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.14);
`;

export const CaptchaNote = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgba(230, 237, 247, 0.55);

  a {
    color: rgba(230, 237, 247, 0.75);
  }
`;
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;

  font-size: 0.9rem;
  line-height: 1.5;

  color: rgba(230, 237, 247, 0.75);

  input {
    margin-top: 4px;
    accent-color: #7d8fff;
    cursor: pointer;
  }

  a {
    color: #9cb6ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
