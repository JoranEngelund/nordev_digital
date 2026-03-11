import * as s from "./styledPersonvern";

export default function Personvern() {
  return (
    <s.Section>
      <s.Container>
        <s.Eyebrow>Personvern</s.Eyebrow>

        <s.Title>Personvernerklæring</s.Title>

        <s.Updated>Sist oppdatert: 10. mars 2026</s.Updated>

        <s.Intro>
          Nordev Digital behandler personopplysninger i forbindelse med
          henvendelser, kundeoppfølging og levering av tjenester. På denne siden
          forklarer vi hvilke opplysninger vi behandler, hvorfor vi gjør det, og
          hvilke rettigheter du har.
        </s.Intro>

        <s.Block>
          <h2>1. Behandlingsansvarlig</h2>
          <p>
            Nordev Digital er behandlingsansvarlig for personopplysninger som
            samles inn gjennom nettsiden, e-post og i forbindelse med
            kundeoppdrag.
          </p>
          <p>
            Kontakt:{" "}
            <a href="mailto:nordevdigital@gmail.com">nordevdigital@gmail.com</a>
          </p>
        </s.Block>

        <s.Block>
          <h2>2. Hvilke opplysninger vi behandler</h2>
          <p>Vi kan behandle opplysninger som:</p>
          <ul>
            <li>navn</li>
            <li>e-postadresse</li>
            <li>telefonnummer</li>
            <li>firmanavn</li>
            <li>
              informasjon du selv sender inn om prosjekt eller forespørsel
            </li>
            <li>kundeopplysninger som er nødvendige for fakturering</li>
          </ul>
        </s.Block>

        <s.Block>
          <h2>3. Hvorfor vi behandler opplysningene</h2>
          <p>Vi bruker personopplysninger for å:</p>
          <ul>
            <li>besvare henvendelser sendt via kontaktskjema eller e-post</li>
            <li>vurdere og følge opp forespørsler om oppdrag</li>
            <li>administrere aktive kundeforhold</li>
            <li>fakturere for utførte tjenester</li>
            <li>holde oversikt over oppdrag og fremdrift internt</li>
          </ul>
        </s.Block>

        <s.Block>
          <h2>4. Hvordan opplysningene lagres</h2>
          <p>Opplysninger kan lagres i:</p>
          <ul>
            <li>e-postsystemet vårt</li>
            <li>faktureringssystemet SendRegning</li>
            <li>
              interne oversikter for oppdragsoppfølging, for eksempel regneark
            </li>
          </ul>
          <p>
            Opplysningene lagres bare så lenge det er nødvendig for å følge opp
            henvendelser, levere tjenester og oppfylle regnskaps- og
            dokumentasjonskrav.
          </p>
        </s.Block>

        <s.Block>
          <h2>5. Deling av opplysninger</h2>
          <p>
            Vi deler ikke personopplysninger med andre enn det som er nødvendig
            for å levere tjenestene våre eller oppfylle lovpålagte plikter.
            Opplysninger kan deles med leverandører vi bruker til fakturering og
            drift, i den grad det er nødvendig for formålet.
          </p>
        </s.Block>

        <s.Block>
          <h2>6. Beskyttelse mot spam</h2>
          <p>
            Kontaktskjemaet på nettsiden kan være beskyttet av Google reCAPTCHA.
            Dette brukes for å hindre spam og automatiserte forespørsler.
          </p>

          <p>
            reCAPTCHA analyserer teknisk informasjon som for eksempel
            IP-adresse, nettleser og bruksmønster for å vurdere om en
            forespørsel sendes av et menneske eller en automatisert tjeneste.
          </p>

          <p>
            Bruken av reCAPTCHA er underlagt Googles personvernregler og
            bruksvilkår.
          </p>

          <p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Google Privacy Policy
            </a>
            {" · "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Google Terms of Service
            </a>
          </p>
        </s.Block>

        <s.Block>
          <h2>7. Rettslig grunnlag</h2>
          <p>
            Vi behandler personopplysninger for å kunne svare på henvendelser,
            følge opp kundeforespørsler, inngå eller oppfylle avtaler og
            administrere kundeforhold.
          </p>
        </s.Block>

        <s.Block>
          <h2>8. Dine rettigheter</h2>
          <p>Du kan blant annet be om:</p>
          <ul>
            <li>innsyn i hvilke personopplysninger vi har om deg</li>
            <li>retting av uriktige opplysninger</li>
            <li>
              sletting av opplysninger der vi ikke lenger har grunnlag for
              lagring
            </li>
            <li>begrensning av behandlingen i enkelte tilfeller</li>
          </ul>
          <p>
            Du har også rett til å klage til Datatilsynet dersom du mener at
            personopplysningene dine behandles i strid med regelverket.
          </p>
        </s.Block>

        <s.Block>
          <h2>9. Kontakt</h2>
          <p>
            Har du spørsmål om personvern eller ønsker å bruke rettighetene
            dine, kan du kontakte oss på{" "}
            <a href="mailto:nordevdigital@gmail.com">nordevdigital@gmail.com</a>
            .
          </p>
        </s.Block>

        <s.Note>
          Dersom Nordev Digital senere tar i bruk analyseverktøy, nyhetsbrev
          eller andre tjenester som innebærer ytterligere behandling av
          personopplysninger, vil denne erklæringen bli oppdatert.
        </s.Note>
      </s.Container>
    </s.Section>
  );
}
