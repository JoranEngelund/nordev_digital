import { useState } from "react";
import * as s from "./styledContact";
import Reveal from "../Reveal/index";

const FORM_ENDPOINT = "https://formspree.io/f/xyknedkk";
const DIRECT_EMAIL = "nordevdigital@gmail.com";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <s.Section id="kontakt">
      <s.BackgroundGlow className="glow glow-1" />
      <s.BackgroundGlow className="glow glow-2" />
      <s.GridOverlay />

      <s.Container>
        <Reveal delay={0.3}>
          <s.Wrapper>
            <s.LeftPanel>
              <s.Eyebrow>Kontakt</s.Eyebrow>

              <s.Title>
                La oss bygge noe <s.GradientText>sterkt sammen</s.GradientText>
              </s.Title>

              <s.Description>
                Fortell kort om bedriften din og hva du trenger hjelp med. Vi
                bygger moderne nettsider og digitale løsninger med fokus på
                design, ytelse og tydelig kommunikasjon.
              </s.Description>

              <s.InfoGrid>
                <s.InfoCard>
                  <strong>Rask og personlig dialog</strong>
                  <span>
                    Du forholder deg direkte til den som bygger løsningen.
                  </span>
                </s.InfoCard>

                <s.InfoCard>
                  <strong>Tilpasset ditt behov</strong>
                  <span>
                    Fra enkle nettsider til mer gjennomførte og skreddersydde
                    løsninger.
                  </span>
                </s.InfoCard>

                <s.InfoCard>
                  <strong>Tilgjengelig for nye prosjekter</strong>
                  <span>
                    Send en melding, så tar vi en uforpliktende prat om veien
                    videre.
                  </span>
                </s.InfoCard>
              </s.InfoGrid>
            </s.LeftPanel>

            <s.FormPanel>
              <s.FormHeader>
                <s.FormTitle>Send en henvendelse</s.FormTitle>
                <s.FormText>
                  Fyll ut skjemaet, så tar vi kontakt så snart vi kan.
                </s.FormText>
              </s.FormHeader>

              <s.Form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_subject"
                  value="Ny henvendelse fra Nordev Digital"
                />

                <s.Row>
                  <s.Field>
                    <s.Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder=" "
                      required
                    />
                    <s.Label htmlFor="name">Navn</s.Label>
                  </s.Field>

                  <s.Field>
                    <s.Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder=" "
                      required
                    />
                    <s.Label htmlFor="email">E-post</s.Label>
                  </s.Field>
                </s.Row>

                <s.Row>
                  <s.Field>
                    <s.Input
                      id="company"
                      type="text"
                      name="company"
                      placeholder=" "
                    />
                    <s.Label htmlFor="company">Bedrift</s.Label>
                  </s.Field>

                  <s.Field>
                    <s.Input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder=" "
                    />
                    <s.Label htmlFor="phone">Telefon (valgfritt)</s.Label>
                  </s.Field>
                </s.Row>

                <s.Field>
                  <s.SelectWrapper>
                    <s.Select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Velg tjeneste
                      </option>
                      <option value="nettside">Nettside</option>
                      <option value="redesign">Redesign</option>
                      <option value="nettbutikk">Nettbutikk</option>
                      <option value="vedlikehold">Vedlikehold</option>
                      <option value="annet">Annet</option>
                    </s.Select>

                    <s.SelectArrow />
                  </s.SelectWrapper>
                </s.Field>

                <s.Field>
                  <s.TextArea
                    id="message"
                    name="message"
                    placeholder=" "
                    required
                  />
                  <s.Label htmlFor="message">
                    Hva kan vi hjelpe deg med?
                  </s.Label>
                </s.Field>

                <s.ButtonRow>
                  <s.SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <s.Spinner />
                        Sender...
                      </>
                    ) : (
                      "Send melding"
                    )}
                  </s.SubmitButton>

                  <s.SecondaryLink href={`mailto:${DIRECT_EMAIL}`}>
                    Eller send e-post direkte
                  </s.SecondaryLink>
                </s.ButtonRow>

                {status === "success" && (
                  <s.StatusMessage $type="success">
                    Takk! Henvendelsen din er sendt. Vi tar kontakt så snart vi
                    kan.
                  </s.StatusMessage>
                )}

                {status === "error" && (
                  <s.StatusMessage $type="error">
                    Noe gikk galt ved sending. Prøv igjen, eller send e-post
                    direkte.
                  </s.StatusMessage>
                )}
              </s.Form>
            </s.FormPanel>
          </s.Wrapper>
        </Reveal>
      </s.Container>
    </s.Section>
  );
}
