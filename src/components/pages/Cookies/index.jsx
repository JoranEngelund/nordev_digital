import * as s from "./styledCookies";

export default function Cookies() {
  return (
    <s.Section>
      <s.Container>
        <s.Eyebrow>Cookies</s.Eyebrow>

        <s.Title>Informasjon om cookies</s.Title>

        <s.Updated>Sist oppdatert: 10. mars 2026</s.Updated>

        <s.Intro>
          Denne siden forklarer hvordan Nordev Digital bruker cookies og
          lignende teknologi på nettsiden. Vi ønsker å være tydelige på hva som
          brukes, hvorfor det brukes, og hva du som besøkende kan forvente.
        </s.Intro>

        <s.Block>
          <h2>1. Hva er cookies?</h2>
          <p>
            Cookies er små tekstfiler som kan lagres i nettleseren din når du
            besøker en nettside. De brukes ofte for å få nettsider til å
            fungere, huske valg eller samle inn statistikk om bruk.
          </p>
        </s.Block>

        <s.Block>
          <h2>2. Hvordan Nordev Digital bruker cookies</h2>
          <p>
            Per i dag bruker Nordev Digital i utgangspunktet ikke cookies til
            markedsføring, sporing eller analyse av brukeratferd.
          </p>
          <p>
            Dersom nettsiden benytter teknisk nødvendige cookies for
            grunnleggende funksjoner, brukes disse bare i den grad det er
            nødvendig for at nettsiden skal fungere som forventet.
          </p>
        </s.Block>

        <s.Block>
          <h2>3. Google reCAPTCHA</h2>

          <p>
            For å beskytte kontaktskjemaet mot spam og automatiserte
            forespørsler kan Nordev Digital bruke Google reCAPTCHA.
          </p>

          <p>
            reCAPTCHA analyserer teknisk informasjon om besøket for å vurdere om
            en forespørsel sendes av et menneske eller en bot. Dette kan
            innebære behandling av blant annet IP-adresse og nettleserdata.
          </p>

          <p>
            Informasjonen behandles av Google i henhold til deres
            personvernregler og bruksvilkår.
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
          <h2>4. Skjema og henvendelser</h2>
          <p>
            Når du sender en henvendelse via kontaktskjema eller e-post, er det
            ikke meningen at dette skal brukes til skjult sporing eller
            markedsføring. Opplysningene behandles for å kunne svare på
            henvendelsen din og følge opp forespørsler.
          </p>
          <p>
            Hvis vi senere tar i bruk tredjeparts verktøy som innebærer cookies
            eller annen sporing knyttet til skjema eller analyse, vil denne
            siden oppdateres og samtykke bli innhentet der det er nødvendig.
          </p>
        </s.Block>

        <s.Block>
          <h2>5. Samtykke</h2>
          <p>
            Dersom Nordev Digital i fremtiden tar i bruk analyseverktøy,
            markedsføringscookies eller andre ikke-nødvendige cookies, vil vi
            innhente samtykke før slike cookies settes i nettleseren din.
          </p>
          <p>
            Samtykke skal være frivillig, informert og like lett å avslå som å
            godta.
          </p>
        </s.Block>

        <s.Block>
          <h2>6. Administrere cookies</h2>
          <p>
            Du kan selv slette eller blokkere cookies i nettleseren din. Hvordan
            dette gjøres avhenger av hvilken nettleser du bruker.
          </p>
          <p>
            Dersom vi senere innfører valgfri bruk av cookies, vil vi også legge
            til en løsning der du kan administrere valgene dine direkte på
            nettsiden.
          </p>
        </s.Block>

        <s.Block>
          <h2>7. Endringer</h2>
          <p>
            Hvis nettsiden senere tar i bruk nye funksjoner eller tjenester som
            innebærer cookies eller annen sporing, vil denne informasjonen bli
            oppdatert.
          </p>
        </s.Block>

        <s.Block>
          <h2>8. Kontakt</h2>
          <p>
            Har du spørsmål om hvordan vi bruker cookies eller lignende
            teknologi, kan du kontakte oss på{" "}
            <a href="mailto:nordevdigital@gmail.com">nordevdigital@gmail.com</a>
            .
          </p>
        </s.Block>

        <s.Note>
          Norske cookie-regler ble skjerpet fra 1. januar 2025. Dersom vi tar i
          bruk analyse, sporing eller annen ikke-nødvendig cookie-bruk senere,
          skal dette håndteres i tråd med gjeldende samtykkekrav.
        </s.Note>
      </s.Container>
    </s.Section>
  );
}
