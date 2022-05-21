import { Container, Logo } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Login } from "../../components/Login";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
export function Home() {
  const { user, signInGoogle } = useAuth();
  let navigate = useNavigate();
  if (user) {
    navigate("/messages", { replace: true });
  } 
    return (
      <Container>
        <Logo src={logoImg} alt="Correio Elegante" width={400} />
        <p>Bem vindo ao Correio Elegante! Entre para enviar suas cartas </p>
        <Login />
      </Container>
    );
  
}
