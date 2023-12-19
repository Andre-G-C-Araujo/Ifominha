import { Container } from "./styles";

export const ButtonText = ({ title, Icon, linkto }) => {
  return (
    <Container to={linkto ? `${linkto}` : "/"}>
      {Icon ? <Icon /> : ""}
      {title}
    </Container>
  );
};
