import { FooterContent } from "./styles";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <FooterContent>
      Feito por
      <Link to="https://github.com/davivsouza">Davi V. Souza</Link>
      {"&"}
      <Link to="https://github.com/VictorRocha-dev">Victor S. Rocha</Link>
    </FooterContent>
  );
}
