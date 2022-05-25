import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Inbox } from "../pages/Inbox";
import { RequireAuth } from "../services/RequireAuth";

export function Router() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/inbox"
        element={
          <RequireAuth>
            <Inbox />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
