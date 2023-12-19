import { useState } from "react";

import { Container, Branch, Form } from "./styles";

import imageBranch from "../../assets/Polygono.png";

import { api } from "../../services/api";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { useAuth } from "../../hooks/auth";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { admin } = useAuth();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    api
      .post("/clients", { name, email, password })
      .then(() => {
        alert("Usuário Cadastrado com sucesso");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível realizar o Cadastro");
        }
      });
  }

  return (
    <Container>
      <Branch>
        <img src={imageBranch} alt="Logo da marca" />
        <h1>I Fóo minha</h1>
      </Branch>

      <Form>
        <Input
          title="Nome"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          title="E-mail"
          placeholder="exemplo@examplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Criar conta" onClick={handleSignUp} />
      </Form>

      <ButtonText title="Já tenho uma conta" />
    </Container>
  );
};
