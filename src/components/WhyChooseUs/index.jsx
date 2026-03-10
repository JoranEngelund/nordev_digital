// eslint-disable-next-line no-unused-vars
import Reveal from "../Reveal";
import * as s from "./styledWhyChooseUs";

const reasons = [
  {
    title: "Personlig oppfølging",
    text: "Du forholder deg direkte til den som bygger løsningen. Det gir en enklere prosess, bedre kommunikasjon og mindre unødvendig friksjon.",
  },
  {
    title: "Moderne design",
    text: "Vi lager nettsider som ser profesjonelle, oppdaterte og tillitsvekkende ut — med fokus på både desktop og mobil.",
  },
  {
    title: "Tilgjengelige priser",
    text: "Prisene er satt for å være realistiske for små og mellomstore bedrifter som ønsker kvalitet uten klassisk byråpris.",
  },
  {
    title: "Skreddersydd løsning",
    text: "Vi bygger ikke bare noe som ser bra ut. Vi lager en løsning som passer bedriften, målene og kundene dine.",
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
