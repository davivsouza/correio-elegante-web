import { AuthGoogleProvider } from "./contexts/AuthGoogle";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes";

export function App() {
  return (
    <AuthGoogleProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </AuthGoogleProvider>
  );
}
