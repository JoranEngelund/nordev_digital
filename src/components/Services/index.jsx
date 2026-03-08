// eslint-disable-next-line no-unused-vars
import * as s from "./styledServices";

const services = [
  {
    title: "Start",
    price: "Fra 7.900 kr",
    description:
      "For små bedrifter som trenger en ryddig, moderne og profesjonell nettside uten unødvendig kompleksitet.",
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
      "For bedrifter som vil ha et mer gjennomført uttrykk, tydeligere struktur og en nettside som jobber bedre for dem.",
    features: [
      "4–8 sider",
      "Skreddersydd design",
      "Tydelige CTA-er",
      "Ytelsesoptimalisering",
      "SEO-oppsett",
    ],
    cta: "Mest aktuell",
    featured: true,
  },
  {
    title: "Pro",
    price: "Fra 24.900 kr",
    description:
      "For større behov, mer innhold og skreddersydde løsninger med ekstra funksjonalitet og fleksibilitet.",
    features: [
      "Flere undersider",
      "Mer avansert UI/UX",
      "Spesialtilpasninger",
      "Bedre struktur og flyt",
      "Tilpasset behov",
    ],
    cta: "Be om pristilbud",
  },
];

const extras = [
  {
    title: "Nettbutikk",
    price: "Fra 19.900 kr",
    text: "For mindre butikker som vil i gang med salg på nett med en ren og moderne løsning.",
  },
  {
    title: "Vedlikehold",
    price: "Fra 490 kr/mnd",
    text: "Løpende oppdateringer, sikkerhet og små forbedringer etter lansering.",
  },
];

export default function Services() {
  return (
    <s.Section id="tjenester">
      <s.BackgroundGlow className="glow glow-1" />
      <s.BackgroundGlow className="glow glow-2" />
      <s.GridOverlay />

      <s.Container>
        <s.SectionHeading>
          <s.Eyebrow>Tjenester og priser</s.Eyebrow>
          <s.Title>
            Moderne løsninger med{" "}
            <s.GradientText>tydelige pakker</s.GradientText>
          </s.Title>
          <s.Description>
            Vi bygger nettsider og digitale løsninger for bedrifter som vil se
            profesjonelle ut på nett. Prisene er satt for å være tilgjengelige,
            uten at det går på bekostning av kvalitet og uttrykk.
          </s.Description>
        </s.SectionHeading>

        <s.CardGrid>
          {services.map((service) => (
            <s.ServiceCard key={service.title} $featured={service.featured}>
              {service.featured && (
                <s.FeaturedBadge>Mest populær</s.FeaturedBadge>
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

        <s.ExtrasGrid>
          {extras.map((item) => (
            <s.ExtraCard key={item.title}>
              <div>
                <s.ExtraTitle>{item.title}</s.ExtraTitle>
                <s.ExtraText>{item.text}</s.ExtraText>
              </div>
              <s.ExtraPrice>{item.price}</s.ExtraPrice>
            </s.ExtraCard>
          ))}
        </s.ExtrasGrid>

        <s.Note>
          Alle priser er fra-priser og avhenger av omfang, innhold,
          funksjonalitet og eventuelle integrasjoner.
        </s.Note>
      </s.Container>
    </s.Section>
  );
}
