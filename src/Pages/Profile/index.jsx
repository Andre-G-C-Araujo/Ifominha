import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

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

  async function handleUpdate() {
    const client = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    // const clientUpdated = Object.assign(client, updatedClient);

    await updateProfile({ client });
  }

  return (
    <Container>
      <NavBar />
      <Content>
        <ButtonText title={"Voltar"} Icon={IoIosArrowBack} to="/" />
        <PhotoProfileComponent />
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
          type="text"
          placeholder={"Senha Antiga"}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder={"Senha Atual"}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title={"Salvar alterações"} onClick={handleUpdate} />
      </Content>

      <Footer />
    </Container>
  );
};
