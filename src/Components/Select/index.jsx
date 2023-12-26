import { Container } from "./styles";

export const Select = ({ title, ...rest }) => {
  return (
    <Container>
      {title}
      <select id="categoriaField" name="opçoesCateg" form="" {...rest}>
        <option value="">Selecione uma categoria</option>
        <option value="Salada">Salada</option>
        <option value="Refeição">Refeição</option>
        <option value="Almoço">Almoço</option>
        <option value="Bebidas">Bebidas</option>
      </select>
    </Container>
  );
};
