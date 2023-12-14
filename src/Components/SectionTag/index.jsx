import { Container, Content } from "./styles";

export const SectionTag = ({ title, children }) => {
  return (
    <Container>
      {title}
      <Content>{children}</Content>
    </Container>
  );
};
