import { Container } from "./styles";

export const ButtonText = ({ title, Icon }) => {
  return (
    <Container>
      {Icon ? <Icon /> : ""}
      {title}
    </Container>
  );
};
