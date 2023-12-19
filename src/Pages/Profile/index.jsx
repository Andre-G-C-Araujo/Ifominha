import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Content } from "./styles";
import { NavBar } from "../../Components/NavBar";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { Footer } from "../../Components/Footer";
import { Button } from "../../Components/Button";
import { PhotoProfileComponent } from "../../Components/PhotoProfile";
import { useAuth } from "../../hooks/auth";

export const Profile = () => {
  const { client, updateProfile } = useAuth();

  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();

  const avatarUrl = client.avatar
    ? `${api.defaults.baseURL}/files/${client.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl); //levar ela pro component?
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    const clientUpdated = Object.assign(client, updated);

    await updateProfile({ client: clientUpdated, avatarFile });
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <NavBar />
      <Content>
        <ButtonText title={"Voltar"} Icon={IoIosArrowBack} to="/" />
        <PhotoProfileComponent
          photo={avatar}
          alter={"Foto do perfil do usúario"}
          onChange={handleChangeAvatar}
        />

        <Input
          type="text"
          placeholder={"Nome do Usuario"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder={"Senha Antiga"}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder={"Senha Atual"}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title={"Salvar alterações"} onClick={handleUpdate} />
      </Content>

      <Footer />
    </Container>
  );
};
