import { AuthGoogleProvider } from "./contexts/AuthGoogle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Inbox } from "./pages/Inbox";
import { Message } from "./pages/Message";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <AuthGoogleProvider>
      
      <Router>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
        <Footer/>
      </Router>
    </AuthGoogleProvider>
  );
}
