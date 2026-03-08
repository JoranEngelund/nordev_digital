import * as s from "./styledFooter";
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

              <s.Link href="#tjenester">Nettsider</s.Link>
              <s.Link href="#tjenester">Redesign</s.Link>
              <s.Link href="#tjenester">Nettbutikk</s.Link>
              <s.Link href="#tjenester">Vedlikehold</s.Link>
            </s.Column>

            <s.Column>
              <s.Title>Sider</s.Title>

              <s.Link href="#prosjekter">Prosjekter</s.Link>
              <s.Link href="#om">Om oss</s.Link>
              <s.Link href="#kontakt">Kontakt</s.Link>
            </s.Column>

            <s.Column>
              <s.Title>Kontakt</s.Title>

              <s.Link href="mailto:kontakt@nordevdigital.no">
                kontakt@nordevdigital.no
              </s.Link>

              <s.Text>Oslo, Norge</s.Text>

              <s.Text>Enkeltpersonsforetak</s.Text>
            </s.Column>
          </s.Columns>
        </s.Top>

        <s.Bottom>
          <s.Copyright>© {new Date().getFullYear()} Nordev Digital</s.Copyright>

          <s.BottomLinks>
            <a href="#">Personvern</a>
            <a href="#">Cookies</a>
          </s.BottomLinks>
        </s.Bottom>
      </s.Container>
    </s.Footer>
  );
}
