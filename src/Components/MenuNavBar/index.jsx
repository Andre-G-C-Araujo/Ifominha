import { Container } from "./styles";

import { ButtonText } from "../ButtonText";

import { IoClose } from "react-icons/io5";

export const MenuNavBar = ({ title }) => {
  return (
    <Container>
      <ButtonText Icon={IoClose} to="/" />
      <p>{title}</p>
    </Container>
  );
};
