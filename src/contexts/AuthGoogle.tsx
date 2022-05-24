import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase-config";
import { Navigate } from "react-router-dom";

type User = {
  name: string | null;
  avatar: string | null;
  email: string | null;
};

type AuthGoogleContextType = {
  user: User | undefined;
  signInGoogle: () => Promise<void>;
};
type AuthGoogleProviderProps = {
  children: ReactNode;
};

export const AuthGoogleContext = createContext({} as AuthGoogleContextType);

export function AuthGoogleProvider({ children }: AuthGoogleProviderProps) {
  const [user, setUser] = useState<User>();

  async function signInGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const signIn = await signInWithPopup(auth, provider);

      const result = signIn.user;

      if (result) {
        const { displayName, photoURL, email } = result;

        setUser({
          name: displayName,
          avatar: photoURL,
          email: email,
        });
      }
    } catch (err: any) {
      const errorCode = err.code;
      const errMessage = err.message;
      const email = err.email;

      console.log({ errorCode, errMessage, email });
    }
  }

  return (
    <AuthGoogleContext.Provider value={{ user, signInGoogle }}>
      {children}
    </AuthGoogleContext.Provider>
  );
}
