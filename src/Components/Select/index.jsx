import { Container } from "./styles";

export const Select = ({ title }) => {
  return (
    <Container>
      {title}
      <select id="categoriaField" name="opçoesCateg" form="">
        <option value="salada">Salada</option>
        <option value="refeição">Refeição</option>
        <option value="almoço">Almoço</option>
        <option value="audi">Audi</option>
      </select>
    </Container>
  );
};
