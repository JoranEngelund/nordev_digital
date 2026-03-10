// eslint-disable-next-line no-unused-vars
import Reveal from "../Reveal";
import * as s from "./styledWhyChooseUs";

const reasons = [
  {
    title: "Personlig oppfølging",
    text: "Du forholder deg direkte til utvikleren som bygger nettsiden. Det gir kortere vei fra idé til løsning, tydelig kommunikasjon og en mer smidig prosess gjennom hele prosjektet.",
  },
  {
    title: "Moderne design",
    text: "Nettsiden er ofte førsteinntrykket av bedriften din. Vi designer og utvikler sider som fremstår profesjonelle, moderne og tillitsvekkende – både på mobil og desktop.",
  },
  {
    title: "Fornuftige priser",
    text: "Vi holder prisene på et realistisk nivå for små og mellomstore bedrifter. Du får en skreddersydd løsning uten kostnadsnivået til et stort byrå.",
  },
  {
    title: "Skreddersydd løsning",
    text: "Alle bedrifter er forskjellige. Derfor bygger vi løsninger fra bunnen av, tilpasset bedriftens behov, mål og kunder.",
  },
];

export default function WhyChooseUs() {
  return (
    <s.Section id="om-oss">
      <s.BackgroundGlow className="glow glow-1" />
      <s.BackgroundGlow className="glow glow-2" />
      <s.GridOverlay />

      <s.Container>
        <Reveal delay={0.3}>
          <s.SectionHeading>
            <s.Eyebrow>Hvorfor velge oss</s.Eyebrow>
            <s.Title>
              En mer personlig og <s.GradientText>moderne måte</s.GradientText>{" "}
              å bygge nettsider på
            </s.Title>
            <s.Description>
              Nordev Digital kombinerer moderne design, tydelig kommunikasjon og
              tilgjengelige priser for bedrifter som vil ta et sterkere steg ut
              på nett.
            </s.Description>
          </s.SectionHeading>
        </Reveal>

        <s.CardGrid>
          {reasons.map((reason, index) => (
            <Reveal delay={0.3}>
              <s.ReasonCard key={reason.title} $delay={index}>
                <s.CardNumber>0{index + 1}</s.CardNumber>
                <s.CardTitle>{reason.title}</s.CardTitle>
                <s.CardText>{reason.text}</s.CardText>
              </s.ReasonCard>
            </Reveal>
          ))}
        </s.CardGrid>
      </s.Container>
    </s.Section>
  );
}
