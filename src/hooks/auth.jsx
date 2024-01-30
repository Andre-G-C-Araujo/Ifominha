import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const initialStateFav = localStorage.getItem("@ifoominha:favorites");

  const [favorites, setFavorites] = useState(
    initialStateFav ? JSON.parse(initialStateFav) : []
  );

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
    localStorage.removeItem("@ifoominha:favorites");

    setData({});
  }

  async function updateProfile({ client, admin, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        if (client) {
          const response = await api.patch("/clients/avatar", fileUploadForm);

          console.log(client);
          client.avatar = response.data.avatar;
        }

        if (admin) {
          const response = await api.patch("/admin/avatar", fileUploadForm);
          admin.avatar = response.data.avatar;
        }
      }
      if (client) {
        await api.put("/clients", client);
        localStorage.setItem("@ifoominha:client", JSON.stringify(client));

        setData({ client, tokenClient: data.tokenClient });
        toast.success("Perfil Atualizado!");
      }
      if (admin) {
        await api.put("/admin", admin);
        localStorage.setItem("@ifoominha:admin", JSON.stringify(admin));

        setData({ admin, tokenAdmin: data.tokenAdmin });
        toast.success("Perfil Atualizado!");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar o perfil.");
      }
    }
  }

  async function handleFormAvatarReferencePlate({ prato, avatarFile }) {
    const fileUploadForm = new FormData();
    fileUploadForm.append("avatar", avatarFile);

    const response = await api.patch("/pratos/avatar", fileUploadForm);

    prato.avatar = response.data.avatar;
  }

  async function updatePlateByAdmin(prato) {}

  async function handleStateFavorites({ id }) {
    const initialArray = JSON.parse(
      localStorage.getItem("@ifoominha:favorites")
    );

    if (initialArray === null) {
      setFavorites([]);
    }

    if (initialArray) {
      setFavorites([...initialArray, id]);
    } else {
      setFavorites((prevState) => [...prevState, id]);
    }
  }
  async function handleDeleteStateFavorite({ id }) {
    const arrayFiltered = favorites.filter((item) => item !== id);
    setFavorites(arrayFiltered);
  }

  useEffect(() => {
    const { client } = data;
    async function updateFavorites() {
      await api.patch("/clients/favorites", {
        client: data.client,
        plateId: data.client.favorites,
      });
    }

    if (client) {
      client.favorites = favorites;

      setData({ client, tokenClient: data.tokenClient });
      updateFavorites();

      localStorage.setItem("@ifoominha:client", JSON.stringify(client));
      localStorage.setItem("@ifoominha:favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

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

  return (
    <AuthContext.Provider
      value={{
        updateProfile,
        handleFormAvatarReferencePlate,
        handleDeleteStateFavorite,
        handleStateFavorites,
        updatePlateByAdmin,
        signOut,
        signIn,
        client: data.client,
        admin: data.admin,
        pratos: data.pratos, //vou tirar o s dos pratos
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
