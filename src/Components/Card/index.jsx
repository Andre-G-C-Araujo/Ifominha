import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import { Container } from "./styles";

import { Button } from "../Button";

export const Card = ({}) => {
  return (
    <Container className="card">
      <FaRegHeart className="heartIcon" />
      <img
        src="https://github.com/Andre-G-C-Araujo.png"
        alt="Foto do prato escolhido"
      />

      <h1 className="card-title">Salada Ravanello</h1>
      <p>Preço:Um x-Bacon</p>

      <div className="counterInput">
        <FaMinus />
        <input type="number" id="points" name="points" step="1" />
        <FaPlus />
      </div>

      <Button title={"Incluir"} />
    </Container>
  );
};
