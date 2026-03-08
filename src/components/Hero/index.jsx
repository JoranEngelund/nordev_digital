// eslint-disable-next-line no-unused-vars
import * as s from "./styledHero";

export default function Hero() {
  return (
    <s.HeroSection>
      <s.BackgroundGlow className="glow-1" />
      <s.BackgroundGlow className="glow-2" />
      <s.BackgroundGlow className="glow-3" />

      <s.GridOverlay />

      <s.ContentWrapper>
        <s.LeftContent>
          <s.Badge>
            <span />
            Nordev Digital · Webutvikling for små og store bedrifter
          </s.Badge>

          <s.Title>
            Vi bygger <s.GradientText>moderne nettsider</s.GradientText> som ser
            rå ut, laster raskt og faktisk leverer resultater.
          </s.Title>

          <s.Description>
            Nordev Digital utvikler skreddersydde nettsider og digitale
            løsninger med fokus på design, ytelse og brukeropplevelse. Vi lager
            løsninger som ser premium ut og føles moderne fra første sekund.
          </s.Description>

          <s.ButtonRow>
            <s.PrimaryButton href="#kontakt">Start et prosjekt</s.PrimaryButton>
            <s.SecondaryButton href="#prosjekter">
              Se prosjekter
            </s.SecondaryButton>
          </s.ButtonRow>
        </s.LeftContent>

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

          <s.MiniGlassCard className="mini-card mini-1">
            <h4>Hypermoderne uttrykk</h4>
            <p>Glass, glow og premium UI.</p>
          </s.MiniGlassCard>

          <s.MiniGlassCard className="mini-card mini-2">
            <h4>Bygget for vekst</h4>
            <p>Nettsider som er raske, tydelige og målrettede.</p>
          </s.MiniGlassCard>

          <s.TechOrb className="orb orb-1">React</s.TechOrb>
          <s.TechOrb className="orb orb-2">UI/UX</s.TechOrb>
          <s.TechOrb className="orb orb-3">SEO</s.TechOrb>
        </s.RightContent>
      </s.ContentWrapper>
    </s.HeroSection>
  );
}
