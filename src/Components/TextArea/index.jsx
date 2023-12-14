import { Container } from "./styles";

export const TextArea = ({ title, ...rest }) => {
  return (
    <Container>
      {title}
      <textarea
        name="description"
        id="descrip"
        cols="30"
        rows="10"
        {...rest}
      ></textarea>
    </Container>
  );
};
