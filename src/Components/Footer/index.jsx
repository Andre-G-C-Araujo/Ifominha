import { Container } from "./styles";

import branchFooter from "../../assets/Polygonfooter.png";

export const Footer = () => {
  return (
    <Container>
      <div>
        <img src={branchFooter} alt="Imagem de um poligono" />
        <h1>I Fóo minha</h1>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
};
