import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AppAdminRoutes } from "./appAdmin.routes";

export function Routes() {
  const { client, admin } = useAuth();

  if (client) {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
  }

  if (admin) {
    return (
      <BrowserRouter>
        <AppAdminRoutes />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
