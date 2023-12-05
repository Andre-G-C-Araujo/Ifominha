import { Container } from "./styles";

export const Input = ({ title, ...rest }) => {
  return (
    <Container>
      <label>
        {title}
        <input type="text" {...rest} />{" "}
        {/* futuamente recebe onchange ou rest*/}
      </label>
    </Container>
  );
};
