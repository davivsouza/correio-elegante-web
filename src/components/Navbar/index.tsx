import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Nav, Li, Img } from "./styles";

import logo from "../../assets/logo.svg";
import inboxIcon from "../../assets/email-icon.svg";

export function NavbarContainer() {
  const { user } = useAuth();
  return (
    <Nav>
      <Li>
        <Link to="/messages">
          <Img width={300} src={logo} alt="Correio Elegante" />
        </Link>
      </Li>
      <Li className="user">
        <Link to="/inbox">
          <Img
            width={50}
            height={20}
            src={inboxIcon}
            className={"inbox"}
            alt={"Caixa de mensagens"}
          />
        </Link>
        <p>{user?.name} </p>
        <Img
          width={40}
          height={40}
          src={`${user?.avatar}`}
          alt={`${user?.name}`}
        />
      </Li>
    </Nav>
  );
}
