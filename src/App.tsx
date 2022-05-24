import { AuthGoogleProvider } from "./contexts/AuthGoogle";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes/routes";

export function App() {
  return (
    <AuthGoogleProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <Footer />
      </BrowserRouter>
    </AuthGoogleProvider>
  );
}
