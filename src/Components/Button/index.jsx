import { Container } from "./styles";

export const Button = ({ title, Icon }) => {
  return (
    <Container type="submit">
      {Icon ? <Icon /> : ""}
      {title}
    </Container>
  );
};
