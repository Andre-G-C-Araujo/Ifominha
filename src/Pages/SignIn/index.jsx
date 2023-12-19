import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Branch, Form } from "./styles";

import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import imageBranch from "../../assets/Polygono.png";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, client } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <Branch>
        <img src={imageBranch} alt="Logo da marca" />
        <h1>I Fóo minha</h1>
        {client ? <p>admin</p> : ""}
      </Branch>

      <Form>
        <Input
          title="E-mail"
          placeholder="exemplo@examplo.com.br"
          Icon={MdAlternateEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          Icon={FaLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
      </Form>

      <ButtonText title="Criar uma conta" linkto="register" />
    </Container>
  );
};
