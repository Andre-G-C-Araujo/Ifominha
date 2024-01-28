import { Container } from "./styles";

export const Input = ({ title, Icon, value, ...rest }) => {
  return (
    <Container>
      <label>
        {title}
        <div>
          {Icon ? <Icon className="iconSearch" /> : <div></div>}
          <input type="text" {...rest} value={value} />{" "}
        </div>
        {/* futuamente recebe onchange ou rest*/}
      </label>
    </Container>
  );
};
