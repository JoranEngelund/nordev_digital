// eslint-disable-next-line no-unused-vars
import * as s from "./styledServices";
import Reveal from "../Reveal/index";

const services = [
  {
    title: "Start",
    price: "Fra 7.900 kr",
    description:
      "For små bedrifter som trenger en enkel og profesjonell nettside uten unødvendig kompleksitet.",
    features: [
      "1–3 sider",
      "Responsivt design",
      "Kontaktskjema",
      "Grunnleggende SEO",
      "Rask levering",
    ],
    cta: "Be om pristilbud",
  },
  {
    title: "Vekst",
    price: "Fra 14.900 kr",
    description:
      "For bedrifter som vil ha en mer gjennomført nettside med tydelig struktur og bedre funksjonalitet.",
    features: [
      "3-5 sider",
      "Skreddersydd design",
      "Ytelsesoptimalisering",
      "Dynamisk innhold (CMS)",
      "3 måneder vedlikehold inkludert",
    ],
    cta: "Be om pristilbud",
    featured: true,
  },
  {
    title: "Pro",
    price: "Fra 24.900 kr",
    description:
      "For større behov og mer skreddersydde løsninger med ekstra funksjonalitet.",
    features: [
      "5-10 sider",
      "Avansert UI/UX",
      "Administrasjonspanel (CMS)",
      "Spesialtilpasninger",
      "Integrasjoner ved behov",
      "6 måneder vedlikehold inkludert",
    ],
    cta: "Be om pristilbud",
  },
];

const extras = [
  {
    title: "Nettbutikk",
    price: "Fra 19.900 kr",
    text: "For butikker som vil starte salg på nett med en ren og moderne løsning.",
  },
  {
    title: "Vedlikehold",
    price: "Fra 490 kr/mnd",
    text: "Oppdateringer, sikkerhetsvedlikehold og mindre forbedringer etter lansering.",
  },
];

export default function Services() {
  return (
    <s.Section id="tjenester">
      <s.BackgroundGlow className="glow glow-1" />
      <s.BackgroundGlow className="glow glow-2" />
      <s.GridOverlay />

      <s.Container>
        <Reveal delay={0.3}>
          <s.SectionHeading>
            <s.Eyebrow>Tjenester og priser</s.Eyebrow>
            <s.Title>
              Moderne nettsider til{" "}
              <s.GradientText>tydelige priser</s.GradientText>
            </s.Title>
            <s.Description>
              Vi bygger nettsider og digitale løsninger for bedrifter som vil
              fremstå profesjonelle på nett. Løsninger tilpasses behov og
              omfang. Ta kontakt for et uforpliktende estimat.
            </s.Description>
          </s.SectionHeading>
        </Reveal>

        <Reveal delay={0.3}>
          <s.CardGrid>
            {services.map((service) => (
              <s.ServiceCard key={service.title} $featured={service.featured}>
                {service.featured && (
                  <s.FeaturedBadge>⭐ Vår anbefaling</s.FeaturedBadge>
                )}

                <s.CardTop>
                  <s.CardTitle>{service.title}</s.CardTitle>
                  <s.CardPrice>{service.price}</s.CardPrice>
                </s.CardTop>

                <s.CardDescription>{service.description}</s.CardDescription>

                <s.FeatureList>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </s.FeatureList>

                <s.CardButton href="#kontakt" $featured={service.featured}>
                  {service.cta}
                </s.CardButton>
              </s.ServiceCard>
            ))}
          </s.CardGrid>
        </Reveal>

        <s.ExtrasGrid>
          {extras.map((item) => (
            <Reveal delay={0.3}>
              <s.ExtraCard key={item.title}>
                <div>
                  <s.ExtraTitle>{item.title}</s.ExtraTitle>
                  <s.ExtraText>{item.text}</s.ExtraText>
                </div>
                <s.ExtraPrice>{item.price}</s.ExtraPrice>
              </s.ExtraCard>
            </Reveal>
          ))}
        </s.ExtrasGrid>
        <Reveal delay={0.3}>
          <s.Note>
            Alle priser er fra-priser og avhenger av omfang, innhold,
            funksjonalitet og eventuelle integrasjoner.
          </s.Note>
          <s.Note></s.Note>
        </Reveal>
      </s.Container>
    </s.Section>
  );
}
