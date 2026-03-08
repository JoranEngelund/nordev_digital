// eslint-disable-next-line no-unused-vars
import * as s from "./styledProjects";
import termofrakt from "../../assets/projects/termofrakt.png";
import psykolog from "../../assets/projects/psykolog.png";

const projects = [
  {
    title: "Engelund Termofrakt",
    category: "Transport · Logistikk",
    description:
      "En profesjonell bedriftsnettside med tydelig struktur, moderne uttrykk og fokus på troverdighet og synlighet på nett.",
    url: "https://termofrakt.no/",
    tags: ["Nettside", "Bedrift", "UI/UX"],
    accent: "blue",
    image: termofrakt,
  },
  {
    title: "Mangfoldpsykologene",
    category: "Helse · Tjenester",
    description:
      "En rolig og tillitsvekkende nettside med fokus på tydelig kommunikasjon, tilgjengelighet og et trygt digitalt førsteinntrykk.",
    url: "https://www.psykologrichani.no/",
    tags: ["Nettside", "Tjenester", "Profil"],
    accent: "violet",
    image: psykolog,
  },
];

export default function Projects() {
  return (
    <s.Section id="prosjekter">
      <s.BackgroundGlow className="glow glow-1" />
      <s.BackgroundGlow className="glow glow-2" />
      <s.GridOverlay />

      <s.Container>
        <s.SectionHeading>
          <s.Eyebrow>Utvalgte prosjekter</s.Eyebrow>
          <s.Title>
            Nettsider vi har <s.GradientText>lansert</s.GradientText>
          </s.Title>
          <s.Description>
            To ulike bransjer, to ulike uttrykk — bygget med fokus på design,
            tydelig kommunikasjon og en bedre digital opplevelse.
          </s.Description>
        </s.SectionHeading>

        <s.ProjectsGrid>
          {projects.map((project) => (
            <s.ProjectCard key={project.title} $accent={project.accent}>
              <s.ProjectPreview $accent={project.accent}>
                <s.BrowserBar>
                  <s.BrowserDots>
                    <span />
                    <span />
                    <span />
                  </s.BrowserDots>
                  <s.AddressBar>{project.url}</s.AddressBar>
                </s.BrowserBar>

                <s.ImageWrapper>
                  <s.ProjectImage src={project.image} alt={project.title} />
                </s.ImageWrapper>
              </s.ProjectPreview>

              <s.ProjectBody>
                <s.ProjectCategory>{project.category}</s.ProjectCategory>
                <s.ProjectTitle>{project.title}</s.ProjectTitle>
                <s.ProjectDescription>
                  {project.description}
                </s.ProjectDescription>

                <s.TagRow>
                  {project.tags.map((tag) => (
                    <s.Tag key={tag}>{tag}</s.Tag>
                  ))}
                </s.TagRow>

                <s.ActionRow>
                  <s.LiveButton
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Se nettside
                  </s.LiveButton>
                </s.ActionRow>
              </s.ProjectBody>
            </s.ProjectCard>
          ))}
        </s.ProjectsGrid>
      </s.Container>
    </s.Section>
  );
}
