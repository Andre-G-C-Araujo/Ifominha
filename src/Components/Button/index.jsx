import { Container } from "./styles";

export const Button = ({ title, Icon, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {Icon ? <Icon /> : ""}
      {title}
    </Container>
  );
};
