import { Container, ContentScrollY } from "./styles";

export const Section = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>

      <ContentScrollY>{children}</ContentScrollY>
    </Container>
  );
};
