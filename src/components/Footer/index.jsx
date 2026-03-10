import * as s from "./styledFooter";
import { HashLink } from "react-router-hash-link";
import Logo from "../Logo";

export default function Footer() {
  return (
    <s.Footer>
      <s.Container>
        <s.TopLine />
        <s.Top>
          <s.Brand>
            <Logo />
            <s.Tagline>
              Digitale løsninger med fokus på design, ytelse og moderne
              brukeropplevelser.
            </s.Tagline>
          </s.Brand>

          <s.Columns>
            <s.Column>
              <s.Title>Tjenester</s.Title>

              <s.Link as={HashLink} smooth to="/#tjenester">
                Nettsider
              </s.Link>
              <s.Link as={HashLink} smooth to="/#tjenester">
                Redesign
              </s.Link>
              <s.Link as={HashLink} smooth to="/#tjenester">
                Nettbutikk
              </s.Link>
              <s.Link as={HashLink} smooth to="/#tjenester">
                Vedlikehold
              </s.Link>
            </s.Column>

            <s.Column>
              <s.Title>Sider</s.Title>

              <s.Link as={HashLink} smooth to="/#prosjekter">
                Prosjekter
              </s.Link>
              <s.Link as={HashLink} smooth to="/#om-oss">
                Om oss
              </s.Link>
              <s.Link as={HashLink} smooth to="/#kontakt">
                Kontakt
              </s.Link>
            </s.Column>

            <s.Column>
              <s.Title>Kontakt</s.Title>

              <s.Link href="mailto:nordevdigital@gmail.com">
                kontakt@nordevdigital.no
              </s.Link>

              <s.Text>Oslo, Norge</s.Text>

              <s.Text>Orgnr:</s.Text>
            </s.Column>
          </s.Columns>
        </s.Top>

        <s.Bottom>
          <s.Copyright>© {new Date().getFullYear()} Nordev Digital</s.Copyright>

          <s.BottomLinks>
            <a href="/personvern">Personvern</a>
            <a href="/cookies">Cookies</a>
          </s.BottomLinks>
        </s.Bottom>
      </s.Container>
    </s.Footer>
  );
}
