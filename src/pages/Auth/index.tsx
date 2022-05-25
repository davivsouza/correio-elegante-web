import { Container, Logo } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Login } from "../../components/Login";
import { useAuth } from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Auth() {
  const {user} = useAuth()
  let navigate = useNavigate()

  useEffect(()=>{
    if(user){
      navigate("/", {replace: true})
    }
  })

  return (
    <Container>
      <Logo src={logoImg} alt="Correio Elegante" width={400} />
        <p>Bem vindo ao Correio Elegante! Entre para enviar suas cartas </p>
      <Login />
    </Container>
  );
}
