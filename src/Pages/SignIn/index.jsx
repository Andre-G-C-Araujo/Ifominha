import { Container, Branch, Form } from "./styles";

import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import imageBranch from "../../assets/Polygono.png";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

export const SignIn = () => {
  return (
    <Container>
      <Branch>
        <img src={imageBranch} alt="Logo da marca" />
        <h1>I Fóo minha</h1>
      </Branch>

      <Form>
        <Input
          title="E-mail"
          placeholder="exemplo@examplo.com.br"
          Icon={MdAlternateEmail}
        />
        <Input
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          Icon={FaLock}
        />
        <Button title="Entrar" />
      </Form>

      <ButtonText title="Criar uma conta" />
    </Container>
  );
};
