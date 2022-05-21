import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/AuthGoogle";

export function useAuth(){
  return useContext(AuthGoogleContext)
}