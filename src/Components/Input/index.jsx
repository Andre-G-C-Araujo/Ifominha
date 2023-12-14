import { Container } from "./styles";

export const Input = ({ title, Icon, ...rest }) => {
  return (
    <Container>
      <label>
        {title}
        <div>
          {Icon ? <Icon className="iconSearch" /> : <div></div>}
          <input type="text" {...rest} />{" "}
        </div>
        {/* futuamente recebe onchange ou rest*/}
      </label>
    </Container>
  );
};
