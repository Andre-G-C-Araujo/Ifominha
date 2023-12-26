import { useState } from "react";

import { Container, Branch, Form } from "./styles";

import imageBranch from "../../assets/Polygono.png";

import { api } from "../../services/api";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return toast.warn("Preencha todos os campos!");
    }
    api
      .post("/clients", { name, email, password })
      .then(() => {
        toast.success("Usuário Cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível realizar o Cadastro");
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
