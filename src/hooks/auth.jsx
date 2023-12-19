import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { client, tokenClient } = response.data;
      const { admin, tokenAdmin } = response.data;

      if (client) {
        localStorage.setItem("@ifoominha:client", JSON.stringify(client));
        localStorage.setItem("@ifoominha:tokenClient", tokenClient);
        api.defaults.headers.common["Authorization"] = `Bearer ${tokenClient}`;
        setData({ client, tokenClient });
      }

      if (admin) {
        localStorage.setItem("@ifoominha:admin", JSON.stringify(admin));
        localStorage.setItem("@ifoominha:tokenAdmin", tokenAdmin);
        api.defaults.headers.common["Authorization"] = `Bearer ${tokenAdmin}`;
        setData({ admin, tokenAdmin });
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@ifoominha:client");
    localStorage.removeItem("@ifoominha:tokenClient");
    localStorage.removeItem("@ifoominha:admin");
    localStorage.removeItem("@ifoominha:tokenAdmin");

    setData({});
  }

  async function updateProfile({ client }) {
    try {
      await api.put("/clients", client);
      localStorage.setItem("@ifoominha:client", JSON.stringify(client));

      setData({ client, tokenClient: data.tokenClient });
      alert("Perfil Atualizado!");
      console.log(data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.");
      }
    }
  }

  useEffect(() => {
    const tokenClient = localStorage.getItem("@ifoominha:tokenClient");
    const client = localStorage.getItem("@ifoominha:client");

    const tokenAdmin = localStorage.getItem("@ifoominha:tokenAdmin");
    const admin = localStorage.getItem("@ifoominha:admin");

    if (tokenClient && client) {
      api.defaults.headers.common["Authorization"] = `Bearer ${tokenClient}`;

      setData({
        tokenClient,
        client: JSON.parse(client),
      });
    }

    if (tokenAdmin && admin) {
      api.defaults.headers.common["Authorization"] = `Bearer ${tokenAdmin}`;

      setData({
        tokenAdmin,
        admin: JSON.parse(admin),
      });
    }
  }, []);

  // useEffect(() => {
  //   const tokenAdmin = localStorage.getItem("@ifoominha:tokenAdmin");
  //   const admin = localStorage.getItem("@ifoominha:admin");

  //   if (tokenAdmin && admin) {
  //     api.defaults.headers.common["Authorization"] = `Bearer ${tokenAdmin}`;

  //     setData({
  //       tokenAdmin,
  //       client: JSON.parse(admin),
  //     });
  //   }
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        updateProfile,
        signOut,
        signIn,
        client: data.client,
        admin: data.admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
