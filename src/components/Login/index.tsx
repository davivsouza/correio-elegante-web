import { useAuth } from "../../hooks/useAuth";
import { LoginGoogle } from "./style";
import googleIcon from '../../assets/google-icon.svg'

export function Login() {
  const { user, signInGoogle } = useAuth();
  return <LoginGoogle bgImg={googleIcon} onClick={signInGoogle}>Entrar com Google</LoginGoogle>;
}
