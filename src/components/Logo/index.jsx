import logo from "../../assets/nordev_refined_logo.svg";
import * as s from "./styledLogo";

export default function Logo() {
  return (
    <s.Logo
      to="/"
      onClick={() => {
        window.location.replace("/");
      }}
      src={logo}
      alt="Nordev Digital Logo"
    />
  );
}
