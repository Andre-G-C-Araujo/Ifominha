import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AppAdminRoutes } from "./appAdmin.routes";

export function Routes() {
  const { client, admin } = useAuth();

  return (
    <BrowserRouter>
      {client ? <AppRoutes /> : admin ? <AppAdminRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
