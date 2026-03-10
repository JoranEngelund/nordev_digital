import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import * as s from "./styledHero";

export default function Hero() {
  const heroContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const heroItem = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <s.HeroSection>
      <s.BackgroundGlow className="glow-1" />
      <s.BackgroundGlow className="glow-2" />
      <s.BackgroundGlow className="glow-3" />

      <s.GridOverlay />

      <s.ContentWrapper>
        <motion.div variants={heroContainer} initial="hidden" animate="visible">
          <s.LeftContent>
            <motion.div variants={heroItem}>
              <s.Badge>
                <span />
                Nordev Digital · Webutvikling for små og store bedrifter
              </s.Badge>
            </motion.div>

            <motion.div variants={heroItem}>
              <s.Title>
                Vi bygger <s.GradientText>moderne nettsider</s.GradientText> som
                er raske, stabile og laget for å vare.
              </s.Title>
            </motion.div>

            <motion.div variants={heroItem}>
              <s.Description>
                Hos Nordev Digital utvikles nettsidene i kode fra bunnen av. Det
                gir mer kontroll, bedre ytelse og løsninger som kan vokse med
                bedriften din – uten begrensningene fra ferdige nettsidebyggere.
              </s.Description>
            </motion.div>

            <motion.div variants={heroItem}>
              <s.ButtonRow>
                <s.PrimaryButton href="#kontakt">Kontakt oss</s.PrimaryButton>
                <s.SecondaryButton href="#prosjekter">
                  Se prosjekter
                </s.SecondaryButton>
              </s.ButtonRow>
            </motion.div>
          </s.LeftContent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <s.RightContent>
            <s.FloatingCard className="main-card">
              <s.CardTop>
                <s.CardDots>
                  <span />
                  <span />
                  <span />
                </s.CardDots>
                <p>Nordev Digital Dashboard</p>
              </s.CardTop>

              <s.MockupBody>
                <s.MockupSidebar>
                  <div />
                  <div />
                  <div />
                  <div />
                </s.MockupSidebar>

                <s.MockupMain>
                  <s.MockupLine className="large" />
                  <s.MockupLine className="medium" />
                  <s.MockupChart />
                  <s.SmallCards>
                    <div />
                    <div />
                    <div />
                  </s.SmallCards>
                </s.MockupMain>
              </s.MockupBody>
            </s.FloatingCard>

            <s.TechOrb className="orb orb-1">Ytelse</s.TechOrb>
            <s.TechOrb className="orb orb-2">UI/UX</s.TechOrb>
            <s.TechOrb className="orb orb-3">SEO</s.TechOrb>
          </s.RightContent>
        </motion.div>
      </s.ContentWrapper>
    </s.HeroSection>
  );
}
