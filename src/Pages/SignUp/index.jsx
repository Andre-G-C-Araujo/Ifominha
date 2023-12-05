import { Container, Branch, Form } from "./styles";

import imageBranch from "../../assets/Polygono.png";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

export const SignUp = () => {
  return (
    <Container>
      <Branch>
        <img src={imageBranch} alt="Logo da marca" />
        <h1>I Fóo minha</h1>
      </Branch>

      <Form>
        <Input title="Nome" placeholder="Exemplo: Maria da Silva" />
        <Input title="E-mail" placeholder="exemplo@examplo.com.br" />
        <Input
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Criar conta" />
      </Form>

      <ButtonText title="Já tenho uma conta" />
    </Container>
  );
};
