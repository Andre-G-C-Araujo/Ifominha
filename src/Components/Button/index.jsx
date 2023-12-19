import { Container } from "./styles";

export const Button = ({ title, Icon, ...rest }) => {
  return (
    <Container type="submit" {...rest}>
      {Icon ? <Icon /> : ""}
      {title}
    </Container>
  );
};
